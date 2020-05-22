#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/serviceFunctions.js';
import { conditions } from '../src/cli.js';
import transformIsEvenToStr from '../src/games/brainEven/index.js';

index(conditions.brainEven, getRandomNumber, transformIsEvenToStr);
