'use strict';

module.exports = {
  // Base
  Blizzard: require('./blizzard/index.js'),
  WoW: require('./blizzard/wow/index.js'),
  // Utility
  version: require('../package.json').version,
};
