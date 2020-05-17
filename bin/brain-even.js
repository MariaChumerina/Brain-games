#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import index from '../src/index.js';
import { rules } from "../src/rules.js";

greeting();
index(rules.brainEven);
