import express from 'express'
import cors from 'cors'
import { errors } from 'celebrate'

import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
    this.celebrate()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use(routes)
  }

  private celebrate(): void {
    this.express.use(errors())
  }
}

export default new App().express
