"use strict";

var _interopRequireWildcard = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Volumes/Transcend/Yuki/code/mit/mdx-vue-deck/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.join");

require("core-js/modules/es.function.name");

require("core-js/modules/es.regexp.flags");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.header = header;
exports.footer = footer;
exports.error = error;
exports.die = die;
exports.exists = exists;
exports.copyFile = copyFile;
exports.vueCliService = vueCliService;
exports.prepareVueCliService = prepareVueCliService;

var _path = _interopRequireDefault(require("path"));

var _execa = _interopRequireDefault(require("execa"));

var _fsExtra = require("fs-extra");

var colors = _interopRequireWildcard(require("./colors"));

var emoji = _interopRequireWildcard(require("./emoji"));

var _package = _interopRequireDefault(require("../../package.json"));

/**
 * Prints messages to console.
 *
 * @param {...string} [msgs]
 */
function log() {
  var _console;

  for (var _len = arguments.length, msgs = new Array(_len), _key = 0; _key < _len; _key++) {
    msgs[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, ['  '].concat(msgs));
}
/**
 * Prints application header to console.
 */


function header() {
  log();
  log(colors.bold(_package.default.name), colors.info(_package.default.version));
}
/**
 * Prints application footer to console.
 */


function footer() {
  log();
}
/**
 * Prints error messages to console.
 *
 * @param {...string} [msgs]
 */


function error() {
  log();

  for (var _len2 = arguments.length, msgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    msgs[_key2] = arguments[_key2];
  }

  console.error('  ', emoji.no, colors.error(msgs.join(' ')));
}
/**
 * Kills the process. Optionally prints error messages to console.
 *
 * @param {...string} [msgs]
 */


function die() {
  arguments.length && error.apply(void 0, arguments);
  footer();
  process.exit(1);
}
/**
 * Checks if path exists.
 *
 * @param {string} path
 * @return {boolean}
 */


function exists(path) {
  return (0, _fsExtra.existsSync)(path);
}
/**
 * Copies file source to destination.
 *
 * @param {string} source
 * @param {string} destination
 */


function copyFile(source, destination) {
  (0, _fsExtra.copySync)(source, destination);
}
/**
 * Run vue-cli-service command
 */


function vueCliService() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return (0, _execa.default)('vue-cli-service', args.filter(Boolean), {
    cwd: _path.default.resolve(__dirname, '../../'),
    stdio: 'inherit',
    preferLocal: true,
    env: {
      SRC_DECK: process.env.__SRC__
    }
  });
}

function prepareVueCliService(_ref, filename) {
  var flags = _ref.flags;

  if (flags.publicPath) {
    process.env.__PUBLIC_PATH__ = flags.publicPath;
  }

  if (flags.outputDir) {
    process.env.__OUTPUT_DIR__ = flags.outputDir;
  }

  if (flags.config) {
    var tailwindThemeConfig = _path.default.resolve(flags.config);

    !exists(tailwindThemeConfig) && die(colors.file(flags.config), 'does not exists');
    process.env.__TAILWIND_THEME_CONFIG_PATH__ = tailwindThemeConfig;
  } else {
    process.env.__TAILWIND_THEME_CONFIG_PATH__ = _path.default.resolve('./theme.config.js');
  }

  var source = _path.default.resolve(filename);

  !exists(source) && die(colors.file(filename), 'does not exists.');
  process.env.__SRC__ = source;
}