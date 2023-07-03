import path from 'path'
import {readFileSync, unlinkSync} from 'fs'
import {Router} from 'express'
import multer from 'multer'
import db from '../config/db'
import {Movie} from '../entity/Movie'

const storeImageMiddleware = multer({
  storage: multer.diskStorage({
    destination: './assets/images',
    filename(req, file, callback) {
      return callback(
        null,
        `${file.originalname.split('.')[0]}-${Date.now()}${path.extname(
          file.originalname,
        )}`,
      )
    },
  }),
}).single('image')

const router = Router()

const readImageFile = (fileSrc: string) => {
  const bitmap = readFileSync(fileSrc)
  return Buffer.from(bitmap)
}

const removeLocalFile = (fileSrc: string) => {
  unlinkSync(fileSrc)
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
    const filePath = path.resolve(process.cwd(), req.file?.path as string)
    const buffer = readImageFile(filePath)

    await db
      .createQueryBuilder()
      .insert()
      .into(Movie)
      .values([{title: req.body.title, image: buffer}])
      .execute()

    removeLocalFile(filePath)

    return res.status(201)
  })
  return router
}
