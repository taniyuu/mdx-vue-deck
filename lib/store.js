"use strict";

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

_vue.default.use(_vuex.default);

var _default = new _vuex.default.Store({
  state: {
    currentPage: 1,
    mode: 'normal',
    steps: 0,
    step: 0
  },
  mutations: {
    toggleMode: function toggleMode(state, next) {
      state.mode = state.mode === next ? 'normal' : next;
    },
    setCurrentPage: function setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setSteps: function setSteps(state, steps) {
      state.steps = steps;
    },
    setStep: function setStep(state, step) {
      state.step = step;
    },
    increaseStep: function increaseStep(state) {
      state.step += 1;
    },
    decreaseStep: function decreaseStep(state) {
      state.step -= 1;
    }
  }
});

exports.default = _default;