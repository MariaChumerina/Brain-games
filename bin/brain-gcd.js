#!/usr/bin/env node
import index from '../src/index.js';
import { getTwoRandomNumbers } from '../src/utils.js';
import { getGCD, rule } from '../src/games/brainGCD/index.js';


index(rule, getTwoRandomNumbers, getGCD);
