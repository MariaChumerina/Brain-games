#!/usr/bin/env node
import index from '../src/index.js';
import { makeTwoNumbers } from '../src/questions.js';
import { rules } from '../src/cli.js';
import checkAnswer from '../src/games/brain-gcd/checkAnswer.js';


index(rules.brainCalc, makeTwoNumbers, checkAnswer);
