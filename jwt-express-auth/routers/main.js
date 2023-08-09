import express from 'express'
import { dashboard, login } from '../controllers/main.js'
import { authenticationMiddleware } from '../middlewares/auth.js'


export const router =  express.Router()


router.route('/login').post(login)
router.route('/dashboard').get(authenticationMiddleware, dashboard)
 