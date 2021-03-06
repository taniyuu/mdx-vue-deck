"use strict";

var _interopRequireWildcard = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.join");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _path = _interopRequireDefault(require("path"));

var constants = _interopRequireWildcard(require("../../constants"));

var colors = _interopRequireWildcard(require("../colors"));

var emoji = _interopRequireWildcard(require("../emoji"));

var utils = _interopRequireWildcard(require("../utils"));

function run() {
  utils.header();

  var file = _path.default.join(process.cwd(), 'theme.config.js');

  var simplePath = 'theme.config.js';
  utils.exists(file) && utils.die(colors.file(simplePath), 'already exists.');
  utils.copyFile(constants.tailwindThemeConfigFile, file);
  utils.log();
  utils.log(emoji.yes, 'Created Tailwind theme config file:', colors.file(simplePath));
  utils.footer();
}