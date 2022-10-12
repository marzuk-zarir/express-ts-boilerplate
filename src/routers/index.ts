import { RequestHandler, Router } from 'express'
import helloRouter from './hello'

const apiRouter = Router()

type RouterType = {
    path: string
    isPrivate?: boolean
    middlewares?: RequestHandler[]
    handler: RequestHandler
}

const routers: RouterType[] = [
    {
        path: '/hello',
        handler: helloRouter
    }
]

routers.forEach(({ path, isPrivate = false, middlewares, handler }) => {
    const middlewaresArray = middlewares || []

    if (isPrivate) {
        middlewaresArray.push((req, res, next) => {
            console.log('protected route')
            next()
        })
    }

    apiRouter.use(path, middlewaresArray, handler)
})

export default apiRouter
