import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.PSQL_HOST,
  port: Number(process.env.PORT_DB),
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  synchronize: true,
  name: "default",
};

export default config;
