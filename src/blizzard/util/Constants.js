'use strict';

exports.Defaults = {
  region: 'eu',
  locale: 'en_GB',
  key: null,
  secret: null,
  token: null,
  debug: false,
};

exports.Roots = [
  {
    region: 'us',
    hostname: 'https://us.api.blizzard.com',
    def: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR'],
  },
  {
    region: 'eu',
    hostname: 'https://eu.api.blizzard.com',
    def: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
  },
  {
    region: 'sea',
    hostname: 'https://sea.api.blizzard.com',
    def: 'en_US',
    locales: ['en_US'],
  },
  {
    region: 'kr',
    hostname: 'https://kr.api.blizzard.com',
    def: 'ko_KR',
    locales: ['ko_KR', 'en_GB', 'en_US'],
  },
  {
    region: 'tw',
    hostname: 'https://tw.api.blizzard.com',
    def: 'zh_TW',
    locales: ['zh_TW', 'en_GB', 'en_US'],
  },
  {
    region: 'cn',
    hostname: 'https://gateway.battlenet.com.cn',
    def: 'zh_CN',
    locales: ['zh_CN', 'en_GB', 'en_US'],
  },
];

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
