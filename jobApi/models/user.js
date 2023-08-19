import mongoose from "mongoose";

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

export const User = mongoose.model('User', userSchema)
