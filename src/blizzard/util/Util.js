'use strict';

const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const { ErrorTexts, SuccessTexts } = require('./Constants');
const chalk = require('chalk');
const log = console.log;

module.exports = class Util {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  /**
   * Sets default properties on an object that aren't already specified.
   * @param {Object} def Default properties
   * @param {Object} given Object to assign defaults to
   * @returns {Object}
   * @private
   */
  static _mergeDefault(def, given) {
    if (!given) return def;
    for (const key in def) {
      if (!has(given, key) || given[key] === undefined) {
        given[key] = def[key];
      } else if (given[key] === Object(given[key])) {
        given[key] = Util.mergeDefault(def[key], given[key]);
      }
    }

    if (given.debug) {
      if (!given.key) {
        Util._makeError(ErrorTexts.noKey);
      }
      if (!given.secret) {
        Util._makeError(ErrorTexts.noSecret);
      }
      if (given.key && given.secret) {
        Util._makeSuccess(SuccessTexts.options);
      }
    }

    return given;
  }

  static _makeError(message) {
    log(chalk.red.bold(chalk.yellow.bold('CyberPoints:'), message));
  }

  static _makeSuccess(message) {
    log(chalk.green.bold(chalk.yellow.bold('CyberPoints:'), message));
  }

  static _makeDeprecated(message) {
    log(chalk.bgWhite(chalk.black.bold(`CyberPoints - [Deprecated]: ${message}`)));
  }
};
