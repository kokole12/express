import express from 'express'
import { notFound } from './middlewares/notFound.js'
import { errorHandler } from './middlewares/error-hander.js'
import 'express-async-errors'
import 'dotenv/config'
import { connectDb } from './db/connect.js'
import { router } from './routers/main.js'


const app = express()


app.use(express.json())
app.use('/api/v1/', router)


app.get('/', (req, res) => {
    res.status(200).send('<h1> Jwt basics</h1>')
})

app.use(errorHandler)
app.use(notFound)


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`app listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
