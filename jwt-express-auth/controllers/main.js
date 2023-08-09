import { CustomApiError } from "../errors/custom-error.js"
import jwt from 'jsonwebtoken'
import { authenticationMiddleware } from "../middlewares/auth.js"
const {sign, verify} = jwt


export const login = async (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    if (!username || !password) {
        throw new CustomApiError("please provide credentials", 400)
    }
    const id = new Date().getDate()
    const token = sign({id, username}, process.env.SECRETE, {expiresIn: '30d'})
    console.log(token)
    res.status(200).json({msg: "user created", token})
}

export const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*10)
        res.status(200).json({msg: 'Hello',
        secrete: `here is your token, your lucky num is ${req.user, luckyNumber}`})
}
