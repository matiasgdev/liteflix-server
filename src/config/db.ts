import {DataSource} from 'typeorm'
import {getConfig} from '.'

export const db = new DataSource({
  type: getConfig('SQL_DB_TYPE') as 'mysql' | 'postgres',
  host: getConfig('SQL_HOST'),
  username: getConfig('SQL_USER'),
  port: Number(getConfig('SQL_PORT')),
  password: getConfig('SQL_PASSWORD'),
  database: getConfig('SQL_DB'),
  synchronize: process.env.NODE_ENV === 'development',
})
