#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import index from '../src/index.js';
import { rules, makeExpression } from "../src/rules.js";
import checkAnswer from "../src/games/brain-calc/checkAnswer.js";


greeting();
index(rules.brainCalc, makeExpression, checkAnswer);