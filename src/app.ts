import 'reflect-metadata'
import express, { Express, json, urlencoded } from 'express'
import { boomErrorHandler, errorHandler, errorLogger } from './network'
import { usersRouter } from './routers'

/**
 * This is an application factory function.
 * @returns - An application instance.
 */
export default (): Express => {
  const app = express()

  app.use(json())
  app.use(urlencoded({ extended: false }))

  // routes
  app.get('/', (req, res) => res.send('Hello World!'))
  usersRouter(app)

  // middlewares
  app.use(errorLogger)
  app.use(boomErrorHandler)
  app.use(errorHandler)

  return app
}
