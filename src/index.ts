import listEndpoints from 'express-list-endpoints'
import {getConfig} from './config'
import {server} from './server'

const port = getConfig('PORT')

console.log(listEndpoints(server))

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
