"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require("sequelize");

var toType = function toType(type) {
  switch (type.constructor) {
    case _sequelize.DataTypes.TEXT:
    case _sequelize.DataTypes.CHAR:
    case _sequelize.DataTypes.DATE:
    case _sequelize.DataTypes.DATEONLY:
    case _sequelize.DataTypes.TIME:
    case _sequelize.DataTypes.UUID:
    case _sequelize.DataTypes.UUIDV1:
    case _sequelize.DataTypes.UUIDV4:
    case _sequelize.DataTypes.JSON:
    case _sequelize.DataTypes.JSONB:
    case _sequelize.DataTypes.STRING:
      return "String";
      break;
    case _sequelize.DataTypes.TINYINT:
    case _sequelize.DataTypes.INTEGER:
    case _sequelize.DataTypes.MEDIUMINT:
    case _sequelize.DataTypes.SMALLINT:
    case _sequelize.DataTypes.BIGINT:
      return "Int";
      break;
    case _sequelize.DataTypes.REAL:
    case _sequelize.DataTypes.FLOAT:
    case _sequelize.DataTypes.DECIMAL:
    case _sequelize.DataTypes.DOUBLE:
      return "Float";
      break;
    case _sequelize.DataTypes.BOOLEAN:
      return "Boolean";
      break;
    default:
      return "String";
  }
};

exports.default = function (table) {
  var result = {};
  for (var columnName in table.tableAttributes) {
    var column = table.tableAttributes[columnName];
    var type = column.type;
    result[columnName] = toType(type);
    // if(type instanceof DataTypes.STRING) {
    //
    // } else if (type instanceof DataTypes.INT) {
    //
    // }
  }
  return result;
};