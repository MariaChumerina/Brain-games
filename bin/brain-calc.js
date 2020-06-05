#!/usr/bin/env node
import index from '../src/index.js';
import { getExpression } from '../src/utils.js';
import { getResultOfExpression, rule } from '../src/games/brainCalc/index.js';


index(rule, getExpression, getResultOfExpression);
