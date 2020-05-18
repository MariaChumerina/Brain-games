#!/usr/bin/env node
import index from '../src/index.js';
import { getProgression } from '../src/questions.js';
import { rules } from '../src/cli.js';
import getMissingNumber from '../src/games/brainProgression/getMissingNumber.js';


index(rules.brainProgression, getProgression, getMissingNumber);
