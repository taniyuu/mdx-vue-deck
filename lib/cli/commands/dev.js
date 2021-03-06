"use strict";

var _interopRequireWildcard = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es.regexp.flags");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var utils = _interopRequireWildcard(require("../utils"));

function run(_ref) {
  var flags = _ref.flags;
  utils.vueCliService('serve', '--host', flags.host, '--port', flags.port, flags.open && '--open');
}