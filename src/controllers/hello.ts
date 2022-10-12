import { RequestHandler } from 'express'
import expressAsyncHandler from 'express-async-handler'

export const getHello: RequestHandler = expressAsyncHandler((req, res) => {
    res.send({ msg: 'Hello World' })
})
