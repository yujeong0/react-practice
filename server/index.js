const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')    // 몽고db 연결 용도
mongoose.connect('mongodb+srv://admin:admin@react-practice.mnwlc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false  // 에러 방지
}).then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})