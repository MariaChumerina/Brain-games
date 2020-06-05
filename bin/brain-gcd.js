#!/usr/bin/env node
import index from '../src/index.js';
import { getTwoRandomNumbers } from '../src/utils.js';
import { conditions } from '../src/cli.js';
import getGCD from '../src/games/brainGCD/index.js';


index(conditions.brainGcd, getTwoRandomNumbers, getGCD);
