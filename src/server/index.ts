import express from 'express'
import cors from 'cors'
import {db} from '../config/db'
import {createMoviesRouter} from '../routes/movies'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/health', async (req, res) =>
  res.status(200).json({
    message: 'ok',
    uptime: process.uptime(),
    db: await db.query(`SELECT NOW()`),
  }),
)

app.use('/v1/movies', createMoviesRouter())

export {app as server}
