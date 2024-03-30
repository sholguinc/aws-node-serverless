// eslint-disable-next-line @typescript-eslint/no-var-requires
const translatte = require('translatte');

export const autoTranslateObject = async (
  input: object,
  to = 'es',
): Promise<object> => {
  const output: object = {};

  for (const key of Object.keys(input)) {
    const translation = await translatte(key, { to });
    const translatedKey = translation.text;

    // @ts-ignore
    output[translatedKey] = input[key];
  }

  return output;
};
