import express from 'express'
import { dashboard, login } from '../controllers/main.js'


export const router =  express.Router()


router.route('/login').post(login)
router.route('/dashboard').get(dashboard)
 