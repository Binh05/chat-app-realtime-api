import express from 'express'
import { Route_chat } from './chatRoutes.js'

const Router = express.Router()

Router.get('/status', (req, res) => {
    res.status(200).json({ message: 'first route for chat api is running' })
})

Router.use('/chat', Route_chat)

export const Route_V1 = Router