#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';
import { transformIsPrimeToStr, rule } from '../src/games/brainPrime/index.js';


index(rule, getRandomNumber, transformIsPrimeToStr);
