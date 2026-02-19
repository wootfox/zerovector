// Zero-Vector Design — Content Layer
// Single source of truth. Each page's content lives in its own file.
// This file re-exports the combined object so existing imports work unchanged.
//
// To edit content for a specific page, open the corresponding file:
//   home.js, philosophy.js, pipeline.js, approach.js, builders.js,
//   leaders.js, media.js, origin.js, open.js, start.js, quiz.js,
//   investiture.js, name.js
//
// The learn/ directory has its own modular structure (individual lesson files).

import home from './home';
import philosophy from './philosophy';
import pipeline from './pipeline';
import approach from './approach';
import builders from './builders';
import leaders from './leaders';
import media from './media';
import origin from './origin';
import open from './open';
import start from './start';
import quiz from './quiz';
import investiture from './investiture';
import name from './name';
import enterprise from './enterprise';
import join from './join';
import learn from './learn';

const en = {
  home,
  philosophy,
  pipeline,
  approach,
  builders,
  leaders,
  enterprise,
  join,
  media,
  origin,
  open,
  start,
  quiz,
  investiture,
  name,
  learn,
};

export default en;
