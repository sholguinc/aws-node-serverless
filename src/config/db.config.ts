import * as path from 'path';

import { DataSource, type DataSourceOptions } from 'typeorm';

import { config } from './env.config';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: 'root',
  password: config.database.rootPassword,
  database: config.database.name,
  logging: false,
  synchronize: false,
  entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '../**/migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
