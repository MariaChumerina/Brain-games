#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/questions.js';
import { rules } from '../src/cli.js';
import isEven from '../src/games/brainEven/isEven.js';

index(rules.brainEven, getRandomNumber, isEven);
