import { User } from "../models/user.js";
import jwt from 'jsonwebtoken'


const {sign, verify} = jwt

export const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error('Not authroised')
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = await verify(token, process.env.JWT_SECRETE)
        req.user = {userId:payload.userId, name:payload.name}
        next()
    } catch (error) {
        throw new Error('Unauthenticated')
    }
}
