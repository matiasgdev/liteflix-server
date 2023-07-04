import path from 'path'
import multer from 'multer'

export const storeImageMiddleware = multer({
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
