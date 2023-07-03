/* eslint-disable import/no-default-export */
import {DataSource, DataSourceOptions} from 'typeorm'
import {connectionData} from '../../ormconfig'

const db = new DataSource(connectionData as unknown as DataSourceOptions)
export default db
