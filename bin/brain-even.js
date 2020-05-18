#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/questions.js';
import { conditions } from '../src/cli.js';
import isEven from '../src/games/brainEven/isEven.js';

index(conditions.brainEven, getRandomNumber, isEven);
