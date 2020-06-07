import express from 'express'
import path from 'path'

import multer from 'multer'
import multerConfig from './config/multer'

import ItemController from './controllers/ItemController'
import PointController from './controllers/PointController'

const routes = express.Router()
const upload = multer(multerConfig)

routes.get('/items', ItemController.index)

routes.get('/points', PointController.index)
routes.get('/points/:id', PointController.show)
routes.post('/points', upload.single('image'), PointController.store)

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

export default routes
