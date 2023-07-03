import listEndpoints from 'express-list-endpoints'
import {getConfig} from './config'
import db from './config/db'
import {server} from './server'

const port = getConfig('PORT')

db.initialize().then(() => {
  server.listen(port, () => {
    console.log(listEndpoints(server))
    console.log(`Server running on port: ${port}`)
  })
})
