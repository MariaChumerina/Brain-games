#!/usr/bin/env node
import index from '../src/index.js';
import { makeProgression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import calcTrueAnswer from '../src/games/brain-progression/calcTrueAnswer.js';


index(rules.brainProgression, makeProgression, calcTrueAnswer);
