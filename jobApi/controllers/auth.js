import { User } from "../models/user.js"
import { StatusCodes } from "http-status-codes"

export const register = async (req, res) => {
    console.log(req.body)
    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user})
}

export const login = async (req, res) => {
    res.send('login route')
}
