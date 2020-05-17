#!/usr/bin/env node
import index from '../src/index.js';
import { rules, makeExpression } from '../src/rules.js';
import checkAnswer from '../src/games/brain-calc/checkAnswer.js';


index(rules.brainCalc, makeExpression, checkAnswer);
