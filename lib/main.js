"use strict";

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

_vue.default.config.productionTip = false;
new _vue.default({
  router: _router.default,
  store: _store.default,
  render: function render(h) {
    return h(_App.default);
  }
}).$mount('#app');