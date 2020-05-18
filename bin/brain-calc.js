#!/usr/bin/env node
import index from '../src/index.js';
import { getExpression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import getMisiingNumber from '../src/games/brain-calc/getMisiingNumber.js';


index(rules.brainCalc, getExpression, getMisiingNumber);
