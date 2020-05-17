#!/usr/bin/env node
import index from '../src/index.js';
import { makeExpression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import checkAnswer from '../src/games/brain-calc/checkAnswer.js';


index(rules.brainCalc, makeExpression, checkAnswer);
