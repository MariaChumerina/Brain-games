#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import index from '../src/index.js';
import { rules } from "../src/rules.js";
import { randomNumber } from "../src/games/brain-even/generatorQuestion.js";

greeting();
index(rules.brainEven, randomNumber);
