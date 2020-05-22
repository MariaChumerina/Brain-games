#!/usr/bin/env node
import index from '../src/index.js';
import { getExpression } from '../src/serviceFunctions.js';
import { conditions } from '../src/cli.js';
import getResultOfExpression from '../src/games/brainCalc/index.js';


index(conditions.brainCalc, getExpression, getResultOfExpression);
