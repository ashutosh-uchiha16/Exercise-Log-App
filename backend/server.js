const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercises-routes')
const userRouter = require('./routes/user-routes')

require('dotenv').config()

const app = express();
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose connection established successfully');

})

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
})

