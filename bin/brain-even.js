#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import index from '../src/index.js';
import { rules, randomNumber } from "../src/rules.js";
import checkAnswer from "../src/games/brain-even/checkAnswer.js";

greeting();
index(rules.brainEven, randomNumber, checkAnswer);
