'use strict';

exports.Defaults = {
  region: 'eu',
  locale: 'en_GB',
  key: null,
  secret: null,
  token: null,
  debug: false,
};

exports.ErrorTexts = {
  noKey: 'Options must be have \'key\' property!',
  noSecret: 'Options must be have \'secret\' property!',
  noToken: 'Options must be have \'token\' property!',
};

exports.DeprecatedTexts = {
  rmSoon: 'This method removing next version of CyberPoints! Please see documentation.',
};

exports.SuccessTexts = {
  options: 'All options are valid!',
};
