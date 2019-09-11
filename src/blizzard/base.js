'use strict';

const Util = require('./util/Util');
const { Defaults } = require('./util/Constants');

module.exports = class Base {
  constructor(options = {}) {
    this.options = Util._mergeDefault(Defaults, options);
  }
};
