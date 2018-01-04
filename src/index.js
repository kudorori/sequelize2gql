
import mappingType from "./mappingType";
import object2typeStr from "./object2typeStr";
export default (_Sequelise) => {
  const result = [];
  const models = _Sequelise.models;
  for(const tableName in models) {
    const table = mappingType(models[tableName]);
    result.push(object2typeStr(tableName.replace(/^\S/, (s) => s.toUpperCase()), table));
  }
  return result.join("\n");
}
