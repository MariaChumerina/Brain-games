#!/usr/bin/env node
import index from '../src/index.js';
import { randomNumber } from '../src/questions.js';
import { rules } from '../src/cli.js';
import calcTrueAnswer from '../src/games/brain-even/calcTrueAnswer.js';

index(rules.brainEven, randomNumber, calcTrueAnswer);
