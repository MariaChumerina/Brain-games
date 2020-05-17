#!/usr/bin/env node
import index from '../src/index.js';
import { makeTwoNumbers } from '../src/questions.js';
import { rules } from '../src/cli.js';
import calcTrueAnswer from '../src/games/brain-gcd/calcTrueAnswer.js';


index(rules.brainCalc, makeTwoNumbers, calcTrueAnswer);
