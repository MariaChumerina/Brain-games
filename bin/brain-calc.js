#!/usr/bin/env node
import index from '../src/index.js';
import { getExpression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import getResultOfExpression from '../src/games/brain-calc/getResultOfExpression.js';


index(rules.brainCalc, getExpression, getResultOfExpression);
