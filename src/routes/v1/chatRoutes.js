import express from 'express'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'get chat router' })
  })
  .post((req, res) => {
    res.status(201).json({ message: 'post chat router' })
  })

export const Route_chat = Router