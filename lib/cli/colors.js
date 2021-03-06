"use strict";

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.string.bold");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bold = bold;
exports.info = info;
exports.error = error;
exports.file = file;

var _chalk = _interopRequireDefault(require("chalk"));

/**
 * Applies colors to emphasize
 *
 * @param {...string} msgs
 */
function bold() {
  return _chalk.default.bold.apply(_chalk.default, arguments);
}
/**
 * Applies colors to inform
 *
 * @param {...string} msgs
 */


function info() {
  var _chalk$bold;

  return (_chalk$bold = _chalk.default.bold).cyan.apply(_chalk$bold, arguments);
}
/**
 * Applies colors to signify error
 *
 * @param {...string} msgs
 */


function error() {
  var _chalk$bold2;

  return (_chalk$bold2 = _chalk.default.bold).red.apply(_chalk$bold2, arguments);
}
/**
 * Applies colors to represent a file
 *
 * @param {...string} msgs
 */


function file() {
  var _chalk$bold3;

  return (_chalk$bold3 = _chalk.default.bold).magenta.apply(_chalk$bold3, arguments);
}