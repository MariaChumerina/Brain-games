#!/usr/bin/env node
import index from '../src/index.js';
import { rules, randomNumber } from '../src/rules.js';
import checkAnswer from '../src/games/brain-even/checkAnswer.js';

index(rules.brainEven, randomNumber, checkAnswer);
