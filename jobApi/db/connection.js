import mongoose from "mongoose";


export const connectDb = (url) => {
    mongoose.connect(url)
    .then(() => {
        console.log('Connected to Database')
    })
    .catch(err => console.log(err))
}
