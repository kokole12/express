import mongoose from "mongoose"
export const connectDb = (url) => {
    return mongoose.connect(url)
    .then(() => console.log('connected to db'))
    .catch((error) => console.log(error))
}
