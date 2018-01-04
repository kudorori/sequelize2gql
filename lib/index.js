"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mappingType = require("./mappingType");

var _mappingType2 = _interopRequireDefault(_mappingType);

var _object2typeStr = require("./object2typeStr");

var _object2typeStr2 = _interopRequireDefault(_object2typeStr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_Sequelise) {
  var result = [];
  var models = _Sequelise.models;
  for (var tableName in models) {
    var table = (0, _mappingType2.default)(models[tableName]);
    var typeName = tableName.replace(/^\S/, function (s) {
      return s.toUpperCase();
    }) + "Model";
    result.push((0, _object2typeStr2.default)(typeName, table));
  }
  return result.join("\n");
};