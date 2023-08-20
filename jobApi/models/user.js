import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide your name"],

    },
    email: {
        type: String,
        required: [true, "please provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please provide password"]
    }
})

// userSchema.pre('save', async () => {
//     const salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password, salt)
// })
export const User = mongoose.model('User', userSchema)
