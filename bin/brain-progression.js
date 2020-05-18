#!/usr/bin/env node
import index from '../src/index.js';
import { getProgression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import getTrueAnswer from '../src/games/brain-progression/getTrueAnswer.js';


index(rules.brainProgression, getProgression, getTrueAnswer);
