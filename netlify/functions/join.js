import { createClient } from '@supabase/supabase-js';

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

const VALID_ROLES = ['framework', 'curriculum', 'evangelist', 'funding'];

// name and email come from the verified JWT — not from the form
const COMMON_REQUIRED = ['pronouns', 'location', 'portfolio', 'portfolio2', 'why_this', 'built_unpaid', 'endurance_story', 'ai_relationship', 'hours', 'runway', 'anything_else', 'source'];

const ROLE_REQUIRED = {
  framework: ['fw_stack', 'fw_oss', 'fw_investiture', 'fw_dx'],
  curriculum: ['cur_sample', 'cur_scenario', 'cur_philosophy', 'cur_technical'],
  evangelist: ['ev_win', 'ev_pitch', 'ev_targets', 'ev_network'],
  funding: ['fund_experience', 'fund_sources', 'fund_scenario', 'fund_philosophy'],
};

const ROLE_FIELDS = {
  framework: ['fw_stack', 'fw_oss', 'fw_investiture', 'fw_dx'],
  curriculum: ['cur_sample', 'cur_scenario', 'cur_philosophy', 'cur_technical'],
  evangelist: ['ev_win', 'ev_pitch', 'ev_targets', 'ev_network'],
  funding: ['fund_experience', 'fund_sources', 'fund_scenario', 'fund_philosophy'],
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  if (!supabase) {
    return json({ error: 'Server not configured' }, 500);
  }

  // Verify JWT — Google auth required
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return json({ error: 'Authentication required. Please sign in with Google.' }, 401);
  }

  const token = authHeader.slice(7);
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return json({ error: 'Invalid or expired session. Please sign in again.' }, 401);
  }

  // Pull name and email from verified Google identity
  const name = user.user_metadata?.full_name || user.user_metadata?.name || '';
  const email = user.email || '';

  if (!name || !email) {
    return json({ error: 'Could not verify your identity. Please sign in again.' }, 401);
  }

  try {
    const body = await req.json();

    // Validate role
    if (!body.role || !VALID_ROLES.includes(body.role)) {
      return json({ error: 'Please select a role.' }, 400);
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
      return json({ error: 'Missing required fields.', missing }, 400);
    }

    // Extract role-specific answers into JSONB
    const roleAnswers = {};
    for (const f of (ROLE_FIELDS[body.role] || [])) {
      if (body[f]) roleAnswers[f] = body[f];
    }

    const row = {
      role: body.role,
      user_id: user.id,
      name: name.trim(),
      email: email.trim(),
      pronouns: String(body.pronouns).trim(),
      location: String(body.location).trim(),
      portfolio: String(body.portfolio).trim(),
      portfolio2: String(body.portfolio2).trim(),
      why_this: String(body.why_this).trim(),
      built_unpaid: String(body.built_unpaid).trim(),
      endurance_story: String(body.endurance_story).trim(),
      ai_relationship: String(body.ai_relationship).trim(),
      hours: body.hours,
      runway: body.runway,
      role_answers: roleAnswers,
      anything_else: String(body.anything_else).trim(),
      source: body.source,
      submitted_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('join_applications').insert(row);
    if (error) {
      console.error('Supabase insert error:', error);
      return json({ error: 'Submission failed. Please try again.' }, 500);
    }

    return json({ success: true });
  } catch (err) {
    console.error('Join function error:', err);
    return json({ error: 'Something went wrong. Please try again.' }, 500);
  }
};
