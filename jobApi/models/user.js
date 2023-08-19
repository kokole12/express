import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide your name"],

    },
    email: {
        type: String,
        required: [true, "please provide email"],
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "email not valid"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please provide password"]
    }
})

export const User = mongoose.model('User', userSchema)
