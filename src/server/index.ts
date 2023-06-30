import express from 'express'
import cors from 'cors'
import {db} from '../config/db'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', async (req, res) =>
  res.status(200).json({
    message: 'ok',
    uptime: process.uptime(),
    db: await db.query(`SELECT NOW()`),
  }),
)

export {app as server}
