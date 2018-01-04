import models from "./models";
import sequelize2gql from "../src";

models.sequelize.sync().then(() => {
    console.log(sequelize2gql(models.sequelize));
})
