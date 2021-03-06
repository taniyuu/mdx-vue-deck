"use strict";

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.slice");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray"));

var _default = {
  render: function render(createElement) {
    return createElement('div', {
      attrs: {
        class: 'w-full flex flex-row -mx-2'
      }
    }, [createElement('div', {
      attrs: {
        class: 'w-1/2 mx-2 flex items-center justify-center'
      }
    }, [this.$slots.default[0]]), createElement('div', {
      attrs: {
        class: 'w-1/2 mx-2 flex flex-col items-center justify-center'
      }
    }, (0, _toConsumableArray2.default)(this.$slots.default.slice(1)))]);
  }
};
exports.default = _default;