#!/usr/bin/env node
import index from '../src/index.js';
import { getExpression } from '../src/questions.js';
import { rules } from '../src/rules.js';
import getResultOfExpression from '../src/games/brainCalc/getResultOfExpression.js';


index(rules.brainCalc, getExpression, getResultOfExpression);
