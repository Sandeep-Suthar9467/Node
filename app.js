
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB =require('./db/connect')
const notFoundRoute = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error-handler')

require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks',tasks)
app.use(notFoundRoute)
app.use(errorHandlerMiddleware)

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch(err) {
        console.log(err)
    }
}

start()