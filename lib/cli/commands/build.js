"use strict";

var _interopRequireWildcard = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.join");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _path = _interopRequireDefault(require("path"));

var utils = _interopRequireWildcard(require("../utils"));

function run() {
  var outputDir = process.env.__OUTPUT_DIR__ || 'dist';
  utils.vueCliService('build').then(function () {
    var source = _path.default.resolve(__dirname, "../../../".concat(outputDir));

    var destination = _path.default.join(process.cwd(), outputDir);

    console.error("".concat(source, ",").concat(destination));
    if (source === destination) return;
    utils.copyFile(source, destination);
  });
}