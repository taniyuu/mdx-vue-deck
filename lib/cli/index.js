#!/usr/bin/env node
"use strict";

var _interopRequireWildcard = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _meow = _interopRequireDefault(require("meow"));

var _package = _interopRequireDefault(require("../../package.json"));

var _commands = _interopRequireDefault(require("./commands"));

var colors = _interopRequireWildcard(require("./colors"));

var cli = (0, _meow.default)("\n  mdx-vue-deck ".concat(colors.info(_package.default.version), "\n\n  Usage:\n    mdx-vue-deck deck.mdx\n    mdx-vue-deck deck.mdx -c tailwind.config.js\n    mdx-vue-deck build deck.mdx\n    mdx-vue-deck eject\n\n  Options:\n      -h --host     Dev server host\n      -p --port     Dev server port\n      -c --config   Use custom theme config file\n      --no-open     Prevent from opening in default browser\n"), {
  description: false,
  flags: {
    port: {
      type: 'string',
      alias: 'p',
      default: '8000'
    },
    host: {
      type: 'string',
      alias: 'h',
      default: 'localhost'
    },
    open: {
      type: 'boolean',
      alias: 'o',
      default: true
    },
    config: {
      type: 'string',
      alias: 'c'
    }
  }
});
var cmd = cli.input[0];
var filename = cli.input[1];

if (cli.input.length === 0) {
  cli.showHelp(0);
}

process.env.__TAILWIND_THEME_CONFIG_PATH__ = './theme.config.js';

_commands.default[cmd].run(cli, filename);