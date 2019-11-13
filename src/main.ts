import { config } from 'dotenv';
config();

import { dumpEnv } from './lib/util';

export const run = async (): Promise<void> => {
  console.log('main::run executed');
  dumpEnv();
};

run();
