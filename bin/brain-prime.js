#!/usr/bin/env node
import index from '../src/index.js';
import { randomNumber } from '../src/questions.js';
import { rules } from '../src/cli.js';
import calcTrueAnswer from '../src/games/brain-prime/calcTrueAnswer.js';


index(rules.brainPrime, randomNumber, calcTrueAnswer);