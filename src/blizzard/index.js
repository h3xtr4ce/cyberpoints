'use strict';

const WoW = require('./wow/index');

module.exports = class Blizzard {
  constructor(options) {
    this.wow = new WoW(options);
  }
};
