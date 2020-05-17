#!/usr/bin/env node
import index from '../src/index.js';
import { makeExpression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import calcTrueAnswer from '../src/games/brain-calc/calcTrueAnswer.js';


index(rules.brainCalc, makeExpression, calcTrueAnswer);
