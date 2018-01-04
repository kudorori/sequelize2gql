"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, obj) {
  var result = "type " + name + " {\n" + Object.keys(obj).map(function (name) {
    return "  " + name + ": " + obj[name];
  }).join("\r\n") + "\n}\n  ";

  return result;
};