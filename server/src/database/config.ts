import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: process.env.BD_HOST,
  port: Number(process.env.BD_PORT),
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASSWORD,
  synchronize: true,
  logging: true,
  entities: ["src/entity/*.*"],
};

export default config;
