import {Sequelize} from "sequelize"


const postgresConnection = new Sequelize( "kapp", "postgres", "maneadepassword", {
  dialect: "postgres",
  host: "127.0.0.1",
  port: 5432,
});

export default postgresConnection