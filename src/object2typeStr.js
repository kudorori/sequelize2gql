import R from "ramda";
export default (name, obj) => {
  const model = `type ${name}Model {
${Object.keys(obj).map((name) => `  ${name}: ${obj[name]}`).join("\r\n")}
}
  `
  const rows = `type ${name}Rows {
  rows: [${name}Model]
  count: Int
}
  `
  return `
${model}
${rows}
  `;
}
