
import mappingType from "./mappingType";
import object2typeStr from "./object2typeStr";
export default (_Sequelise) => {
  const result = [];
  const models = _Sequelise.models;
  for(const tableName in models) {
    const table = mappingType(models[tableName]);
    const typeName = `${tableName.replace(/^\S/, (s) => s.toUpperCase())}Model`;
    result.push(object2typeStr(typeName, table));
  }
  return result.join("\n");
}
