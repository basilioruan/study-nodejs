import { DataSource, DataSourceOptions } from 'typeorm';
import { env } from '../env';

const ENTITIES_PATH = '**/entities/**/*.ts';
const MIGRATIONS_PATH = '**/migrations/**/*.ts';

export const dataSource: DataSource = new DataSource({
  type: env.DB_TYPE,
  host: env.DB_HOST,
  port: env.DB_PORT,
  schema: env.DB_SCHEMA,
  database: env.DB_NAME,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  entities: [ENTITIES_PATH],
  migrations: [MIGRATIONS_PATH],
  synchronize: false,
  logging: env.DB_LOGGING,
} satisfies DataSourceOptions);
