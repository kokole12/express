import express from 'express'
import 'dotenv/config'
import { notFound } from './middlewares/not-found.js'
import { customErrorHandler } from './middlewares/error-handler.js'
import 'express-async-errors';
import { authRouter } from './routes/auth.js';
import { jobRouter } from './routes/job.js';
import {connectDb} from './db/connect.js'

// constants 
const app = express()
const port = process.env.PORT || 3000

//json middleware
app.use(express.json())


//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobRouter)

app.get('/', (req, res) => {
    return res.json({"msg": "test route"})
})

//middlewares
app.use(notFound)
app.use(customErrorHandler)


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
