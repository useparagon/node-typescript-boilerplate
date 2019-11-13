import * as constants from '../config/constants';

export const dumpEnv = (): void => {
  const env: { [x: string]: string } = Object.keys(constants).reduce(
    (obj, key) => {
      obj[key] = constants[key];
      return obj;
    },
    {},
  );

  console.log(env);
};
