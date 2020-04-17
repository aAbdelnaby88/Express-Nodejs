const mongoose = require('mongoose');
const express = require('express')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const log = require('./middlewares/log')
const logRequestBody = require('./middlewares/logReqBody')
const app = express()


mongoose.connect('mongodb://localhost:27017/iti-db', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) console.log("Mongod Connected...")
});


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(log)
app.use(logRequestBody)
app.use('/users', userRouter)
app.use('/posts', postRouter)


app.use((err, req, res, next) => {
    debugger;
    res.status(5000).send(err)
})

app.listen(5000, (err) => {
    if (!err) return console.log("server started...")
    console.log(err)
})