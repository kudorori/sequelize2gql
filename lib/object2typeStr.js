"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, obj) {
  var model = "type " + name + "Model {\n" + Object.keys(obj).map(function (name) {
    return "  " + name + ": " + obj[name];
  }).join("\r\n") + "\n}\n  ";
  var rows = "type " + name + "Rows {\n  rows: [" + name + "Model]\n  count: Int\n}\n  ";
  return "\n" + model + "\n" + rows + "\n  ";
};