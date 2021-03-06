"use strict";

var _interopRequireWildcard = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var dev = _interopRequireWildcard(require("./dev"));

var build = _interopRequireWildcard(require("./build"));

var eject = _interopRequireWildcard(require("./eject"));

var _default = {
  dev: dev,
  build: build,
  eject: eject
};
exports.default = _default;