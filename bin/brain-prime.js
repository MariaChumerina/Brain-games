#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/questions.js';
import { rules } from '../src/rules.js';
import isPrime from '../src/games/brainPrime/isPrime.js';


index(rules.brainPrime, getRandomNumber, isPrime);
