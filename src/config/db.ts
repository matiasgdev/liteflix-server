import {DataSource} from 'typeorm'
import {getConfig} from '.'

export const db = new DataSource({
  type: 'mysql',
  host: getConfig('MYSQL_HOST'),
  username: getConfig('MYSQL_USER'),
  port: Number(getConfig('MYSQL_PORT')),
  password: getConfig('MYSQL_PASSWORD'),
  database: getConfig('MYSQL_DB'),
  synchronize: process.env.NODE_ENV === 'development',
})
