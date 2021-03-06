"use strict";

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Deck = _interopRequireDefault(require("./views/Deck.vue"));

_vue.default.use(_vueRouter.default);

var _default = new _vueRouter.default({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/:page?',
    name: 'home',
    component: _Deck.default
  }]
});

exports.default = _default;