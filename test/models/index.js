import * as user from "./user";
import * as blog from "./blog";
import Sequelize from "sequelize";

const models = {
  user,
  blog
};
const sequelize = new Sequelize({
  "username": "manager",
  "password": "manager1234",
  "database": "test-dbb",
  "host": "114.33.147.152",
  "dialect": "mysql",
  "timezone":"+08:00",
  "port": "3333",
  "logging":false
});
let result = {
  Sequelize,
  sequelize
};

for( let table in models ) {
  if("define" in models[table]) {
    result[table] = sequelize.import(table, models[table].define);
  }
}

for( const table in models ) {
  if ("relation" in models[table]) {
    models[table].relation(result);
  }
}

export default result;
