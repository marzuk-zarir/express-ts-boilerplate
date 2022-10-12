import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import defaultErrorHandler from './middlewares/errors/defaultErrorHandler'
import notFoundHandler from './middlewares/errors/notFoundHandler'
import apiRouter from './routers'

const app = express()

// use dotenv on development mode
if (app.get('env') !== 'production') {
    dotenv.config()
}

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// routers
app.use('/api', apiRouter)

// error handler
app.use('*', notFoundHandler)
app.use(defaultErrorHandler)

export default app
