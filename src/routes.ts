import express from 'express'
import path from 'path'

import ItemController from './controllers/ItemController'
import PointController from './controllers/PointController'

const routes = express.Router()

routes.get('/items', ItemController.index)

routes.get('/points', PointController.index)
routes.get('/points/:id', PointController.show)
routes.post('/points', PointController.store)

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

export default routes
