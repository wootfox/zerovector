import { createClient } from '@supabase/supabase-js';

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

// Rate limit: 3 submissions per IP per hour
const rateMap = new Map();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000;

function checkRate(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW) {
    rateMap.set(ip, { start: now, count: 1 });
    return true;
  }
  entry.count++;
  return entry.count <= RATE_LIMIT;
}

const VALID_ROLES = ['framework', 'curriculum', 'evangelist', 'funding'];
const COMMON_REQUIRED = ['name', 'email', 'portfolio', 'why_this', 'built_unpaid', 'endurance_story', 'ai_relationship', 'hours'];

const ROLE_REQUIRED = {
  framework: ['fw_stack', 'fw_oss', 'fw_investiture'],
  curriculum: ['cur_sample', 'cur_scenario'],
  evangelist: ['ev_win', 'ev_pitch', 'ev_targets', 'ev_network'],
  funding: ['fund_experience', 'fund_sources', 'fund_scenario'],
};

const ROLE_FIELDS = {
  framework: ['fw_stack', 'fw_oss', 'fw_investiture', 'fw_dx'],
  curriculum: ['cur_sample', 'cur_scenario', 'cur_philosophy', 'cur_technical'],
  evangelist: ['ev_win', 'ev_pitch', 'ev_targets', 'ev_network'],
  funding: ['fund_experience', 'fund_sources', 'fund_scenario', 'fund_philosophy'],
};

function hashIP(ip) {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return hash.toString(36);
}

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ip = req.headers.get('x-forwarded-for') || req.headers.get('client-ip') || 'unknown';
  if (!checkRate(ip)) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();

    // Validate role
    if (!body.role || !VALID_ROLES.includes(body.role)) {
      return new Response(JSON.stringify({ error: 'Please select a role.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate common required fields
    const missing = [];
    for (const field of COMMON_REQUIRED) {
      if (!body[field] || !String(body[field]).trim()) missing.push(field);
    }

    // Validate role-specific required fields
    for (const field of ROLE_REQUIRED[body.role]) {
      if (!body[field] || !String(body[field]).trim()) missing.push(field);
    }

    if (missing.length > 0) {
      return new Response(JSON.stringify({ error: 'Missing required fields.', missing }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Basic email validation
    const email = String(body.email).trim();
    if (!email.includes('@') || !email.includes('.')) {
      return new Response(JSON.stringify({ error: 'Please provide a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Extract role-specific answers into JSONB
    const roleAnswers = {};
    for (const f of (ROLE_FIELDS[body.role] || [])) {
      if (body[f]) roleAnswers[f] = body[f];
    }

    const row = {
      role: body.role,
      name: String(body.name).trim(),
      pronouns: body.pronouns ? String(body.pronouns).trim() : null,
      email,
      location: body.location ? String(body.location).trim() : null,
      portfolio: String(body.portfolio).trim(),
      portfolio2: body.portfolio2 ? String(body.portfolio2).trim() : null,
      why_this: String(body.why_this).trim(),
      built_unpaid: String(body.built_unpaid).trim(),
      endurance_story: String(body.endurance_story).trim(),
      ai_relationship: String(body.ai_relationship).trim(),
      hours: body.hours,
      runway: body.runway || null,
      role_answers: roleAnswers,
      anything_else: body.anything_else ? String(body.anything_else).trim() : null,
      source: body.source || null,
      ip_hash: hashIP(ip),
      submitted_at: new Date().toISOString(),
    };

    // If Supabase is configured, insert. Otherwise log (for local dev).
    if (supabase) {
      const { error } = await supabase.from('join_applications').insert(row);
      if (error) {
        console.error('Supabase insert error:', error);
        return new Response(JSON.stringify({ error: 'Submission failed. Please try again.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } else {
      console.log('Join application (no Supabase):', JSON.stringify(row, null, 2));
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Join function error:', err);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
