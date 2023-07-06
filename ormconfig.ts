import {getConfig} from './src/config'

export const connectionData = {
  type: getConfig('SQL_DB_TYPE'),
  host: getConfig('SQL_HOST'),
  username: getConfig('SQL_USER'),
  port: Number(getConfig('SQL_PORT')),
  password: getConfig('SQL_PASSWORD'),
  database: getConfig('SQL_DB'),
  synchronize: true,
  extra: {
    charset: 'utf8mb4_unicode_ci',
    ...(process.env.NODE_ENV === 'development'
      ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : {}),
  },
  name: 'migration',
  migrations: ['./src/migration/*{.ts,.js}'],
  entities: ['./src/entity/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migration',
  },
}
