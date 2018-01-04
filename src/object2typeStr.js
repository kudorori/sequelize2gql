import R from "ramda";
export default (name, obj) => {
  const result = `type ${name} {
${Object.keys(obj).map((name) => `  ${name}: ${obj[name]}`).join("\r\n")}
}
  `

  return result;
}
