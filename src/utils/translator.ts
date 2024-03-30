import * as esTranslations from '../translations/es.json';

export const translate = (
  input: string,
  translations = esTranslations,
): string => {
  // @ts-ignore
  return translations[input] || input;
};

export const translateArray = (
  inputArray: Array<string | object>,
  translations = esTranslations,
): Array<string | object> => {
  return inputArray.map((input) => {
    if (typeof input === 'string') {
      return translate(input, translations);
    } else {
      return translateObject(input, translations);
    }
  });
};

export const translateObject = (
  input: object,
  translations = esTranslations,
): object => {
  const output: object = {};

  Object.keys(input).forEach((key) => {
    const newKey = translate(key, translations);

    // @ts-ignore
    let value = input[key];

    if (Array.isArray(value)) {
      value = translateArray(value, translations);
    } else if (value instanceof Object) {
      value = translateObject(value, translations);
    }

    // @ts-ignore
    output[newKey] = value;
  });

  return output;
};
