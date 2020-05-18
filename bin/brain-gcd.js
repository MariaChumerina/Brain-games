#!/usr/bin/env node
import index from '../src/index.js';
import { getTwoRandomNumbers } from '../src/questions.js';
import { rules } from '../src/cli.js';
import getGCD from '../src/games/brain-gcd/getGCD.js';


index(rules.brainGcd, getTwoRandomNumbers, getGCD);
