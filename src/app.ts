import express, { Express, json, urlencoded } from 'express'
import { errorLogger } from '~/network/middlewares'

/**
 * This is an application factory function.
 *
 * @returns - An application instance.
 */
export default (): Express => {
  const app = express()

  app.use(json())
  app.use(urlencoded({ extended: false }))

  // routes

  // middlewares
  app.use(errorLogger)

  return app
}
