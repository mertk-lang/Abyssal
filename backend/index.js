const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use('/posts', require('./routes/post/index'))


app.listen((process.env.PORT || port), () => {console.log('server is listening on port')});
