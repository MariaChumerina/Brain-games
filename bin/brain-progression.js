#!/usr/bin/env node
import index from '../src/index.js';
import { makeProgression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import checkAnswer from '../src/games/brain-progression/checkAnswer.js';


index(rules.brainProgression, makeProgression, checkAnswer);
