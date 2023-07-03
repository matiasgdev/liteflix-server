import path from 'path'
import {Router} from 'express'
import multer from 'multer'

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

export const createMoviesRouter = () => {
  router.post('/', storeImageMiddleware, (req, res) =>
    // store in instance
    res.send('ok'),
  )
  return router
}
