import { RequestHandler } from 'express'
import createHttpError from 'http-errors'

const notFoundHandler: RequestHandler = (req, res, next) => {
    next(new createHttpError.NotFound())
}

export default notFoundHandler
