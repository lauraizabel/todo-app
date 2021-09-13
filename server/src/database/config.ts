import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: process.env.BD_HOST,
  port: Number(process.env.BD_PORT),
  username: "postgres",
  password: "123456",
  synchronize: true,
  entities: ["src/entities/*.*"],
  migrations: ["src/migrations/*.*"],
  logging: true,
};

export default config;
