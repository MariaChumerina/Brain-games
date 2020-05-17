#!/usr/bin/env node
import index from '../src/index.js';
import { randomNumber } from '../src/questions.js';
import { rules } from '../src/cli.js';
import checkAnswer from '../src/games/brain-even/checkAnswer.js';

index(rules.brainEven, randomNumber, checkAnswer);
