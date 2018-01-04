import { DataTypes } from "sequelize";

const toType = type => {
  switch (type.constructor) {
    case DataTypes.TEXT:
    case DataTypes.CHAR:
    case DataTypes.DATE:
    case DataTypes.DATEONLY:
    case DataTypes.TIME:
    case DataTypes.UUID:
    case DataTypes.UUIDV1:
    case DataTypes.UUIDV4:
    case DataTypes.JSON:
    case DataTypes.JSONB:
    case DataTypes.STRING:
      return "String";
      break;
    case DataTypes.TINYINT:
    case DataTypes.INTEGER:
    case DataTypes.MEDIUMINT:
    case DataTypes.SMALLINT:
    case DataTypes.BIGINT:
      return "Int"
      break;
    case DataTypes.REAL:
    case DataTypes.FLOAT:
    case DataTypes.DECIMAL:
    case DataTypes.DOUBLE:
      return "Float"
      break;
    case DataTypes.BOOLEAN:
      return "Boolean"
      break;
    default:
      return "String"
  }
}


export default table => {
  let result = {};
  for( const columnName in table.tableAttributes) {
    const column = table.tableAttributes[columnName];
    const type = column.type;
    result[columnName] = toType(type);
    // if(type instanceof DataTypes.STRING) {
    //
    // } else if (type instanceof DataTypes.INT) {
    //
    // }
  }
  return result;
}
