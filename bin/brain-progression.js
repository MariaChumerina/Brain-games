#!/usr/bin/env node
import index from '../src/index.js';
import { getProgression } from '../src/utils.js';
import { getMissingNumber, rule } from '../src/games/brainProgression/index.js';


index(rule, getProgression, getMissingNumber);
