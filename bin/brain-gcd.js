#!/usr/bin/env node
import index from '../src/index.js';
import { getTwoRandomNumbers } from '../src/questions.js';
import { conditions } from '../src/cli.js';
import getGCD from '../src/games/brainGCD/getGCD.js';


index(conditions.brainGcd, getTwoRandomNumbers, getGCD);
