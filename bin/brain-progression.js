#!/usr/bin/env node
import index from '../src/index.js';
import { getProgression } from '../src/utils.js';
import { conditions } from '../src/cli.js';
import getMissingNumber from '../src/games/brainProgression/index.js';


index(conditions.brainProgression, getProgression, getMissingNumber);
