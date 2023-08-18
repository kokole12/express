import mongoose from "mongoose";

export const connectDb = (uri) => {
    mongoose.connect(uri)
    .then(() => {
        console.log('connected to Db')
    })
    .catch(error => console.log(error))
}
