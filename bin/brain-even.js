#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';
import { transformIsEvenToStr, rule } from '../src/games/brainEven/index.js';

index(rule, getRandomNumber, transformIsEvenToStr);
