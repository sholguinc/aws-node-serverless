import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  database: {
    name: process.env.MYSQL_DATABASE,
    rootPassword: process.env.MYSQL_ROOT_PASSWORD,
    host: process.env.MYSQL_HOST ?? 'localhost',
    port: Number(process.env.MYSQL_PORT) ?? 3306,
  },
};
