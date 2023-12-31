import path from 'path'
import {readFileSync, unlink} from 'fs'
import {Router} from 'express'
import db from '../config/db'
import {Movie} from '../entity/Movie'
import {storeImageMiddleware} from '../middlewares/stora-image.middleware'
import {randomRate} from '../utils/randomRate'

const mimeTypeRegex = /^image\/(jpeg|png|webp|gif|bmp)$/
const router = Router()

const readImageFile = (fileSrc: string) => {
  const bitmap = readFileSync(fileSrc)
  return Buffer.from(bitmap)
}

export const createMoviesRouter = () => {
  router.get('/', async (req, res) => {
    const movies = await db
      .getRepository(Movie)
      .createQueryBuilder('movies:list')
      .getMany()

    res.status(200).json(movies)
  })

  router.post('/', storeImageMiddleware, async (req, res) => {
    if (!mimeTypeRegex.test(req.file?.mimetype as string)) {
      res.status(400).json({message: `Invalid image format provided`})
      return
    }
    const filePath = path.resolve(process.cwd(), req.file?.path as string)
    const buffer = readImageFile(filePath)

    const movie = await db
      .createQueryBuilder()
      .insert()
      .into(Movie)
      .values([
        {
          title: req.body.title,
          image: buffer,
          rate: randomRate(),
        },
      ])
      .execute()

    unlink(filePath, () => {
      res
        .status(200)
        .json({...movie.raw[0], title: req.body.title, image: buffer})
    })
  })
  return router
}
