import mongoose from 'mongoose'

export const connectDB = (uri) => {
    mongoose.connect(uri)
    .then(() => console.log("Connected to Db"))
    .catch(error => {
        console.log(error)
    })
}
