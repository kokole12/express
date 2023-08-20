import express from 'express';
import 'express-async-errors'
import { StatusCodes } from 'http-status-codes';
import { authRouter } from './routes/auth.js';
import { jobRouter } from './routes/jobs.js';
import { connectDb } from './db/connection.js';
import 'dotenv/config.js'
import { notFound } from './middlewares/not-found.js';
import { errorHandler } from './middlewares/error-handler.js';
import { auth } from './middlewares/authentication.js';

//extra packages
import helmeet from 'helmet'
import cors from 'cors'
import xss from 'xss-clean'
import rateLimit from 'express-rate-limit'



const  app = express()

const port = process.env.PORT || 3000

app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'test route'})
})


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', auth, jobRouter)


//middlwares
app.use(notFound)
app.use(errorHandler)


const start = async () => {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })
}

start()
