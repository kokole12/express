import { User } from "../models/user.js"
import { StatusCodes } from "http-status-codes"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const {sign, verify} = jwt

export const register = async (req, res) => {
    const {name, email, password} = req.body
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    const tempUser = {name, email, password: hashedPassword}
    const user = await User.create({...tempUser})
    const token = sign({userId:user._id, name:user.name}, process.env.JWT_SECRETE, {expiresIn: process.env.EXPIRES_IN})
    res.status(StatusCodes.CREATED).json({user: {name: user.name}, token})
}

export const login = async (req, res) => {
    const {email, password} = req.body
    console.log(email)
    console.log(password)
    if (!email || !password) {
        throw new Error('Bad request provide email and password')
    }

    const user = await User.findOne({email})
    if (!user) {
        throw new Error('Unauthenticated user')
    }
    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) {
        throw new Error('Unauthenticated')
    }
    const token = sign({userId:user._id, name:user.name}, process.env.JWT_SECRETE, {expiresIn: process.env.EXPIRES_IN})
    res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}
