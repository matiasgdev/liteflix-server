import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use('/', (req, res) =>
  res.json(200).send({message: 'ok', uptime: process.uptime()}),
)

export {app}
