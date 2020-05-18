#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/questions.js';
import { rules } from '../src/cli.js';
import isPrime from '../src/games/brain-prime/isPrime.js';


index(rules.brainPrime, getRandomNumber, isPrime);
