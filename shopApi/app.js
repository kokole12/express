import express from 'express'
import 'dotenv/config'
import { not_found } from './middleware/not-found.js'
import { errorHandler } from './middleware/error-handler.js'
import { connectDB } from './db/connect.js'
import { router } from './routes/products.js'
import 'express-async-errors';


// constants
const port = process.env.PORT || 3000
const app = express()

// middlewares
app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.send('<h1> Store API</h1>')
})

app.use('/api/v1/products', router)

app.use(not_found)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`application running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
    
}

start()
