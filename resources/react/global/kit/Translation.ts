import { usePage } from '@inertiajs/react';

export const trans = function (key, replace = {}) {
  const keys = key.split('.');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let translations: any = usePage().props.translations;

  keys.forEach(function (keyTmp) {
    translations = translations[keyTmp] ? translations[keyTmp] : keyTmp;
  });

  Object.keys(replace).forEach(function (key) {
    translations = translations.replace(':' + key, replace[key]);
  });

  return translations;
};

export const trans_n = function (key, number, replace = {}) {
  const options = key.split('|');

  key = options[0];

  if (number > 1) {
    key = options[1];
  }

  return trans(key, replace);
};
