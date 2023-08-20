import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    company: {
        type: String,
        required: [true, "please provide company"]
    },
    position: {
        type: String,
        required: [true, "provide postion"]
    },
    status: {
        type: String,
        enum: ['interview', 'pending', 'declined']
    }
})