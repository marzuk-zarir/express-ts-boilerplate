import { ErrorRequestHandler } from 'express'
import { HttpError } from 'http-errors'

const defaultErrorHandler: ErrorRequestHandler = (err: HttpError, req, res, next) => {
    const status = err.status || 500
    const error = process.env.NODE_ENV !== 'production' ? err.message : 'something went wrong'

    if (status === 500) {
        console.error(err)
    }

    res.status(status).send({ status, error })
}

export default defaultErrorHandler
