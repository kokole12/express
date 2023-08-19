import express from 'express';
import 'express-async-errors'
import { StatusCodes } from 'http-status-codes';
import { authRouter } from './routes/auth.js';
import { jobRouter } from './routes/jobs.js';
import { connectDb } from './db/connection.js';
import 'dotenv/config.js'


const  app = express()

const port = process.env.PORT || 3000

app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'test route'})
})


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobRouter)


const start = async () => {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })
}

start()
