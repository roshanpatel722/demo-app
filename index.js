const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hi_there', (req, res) => {
  res.send('Hi there🙋🏽‍♂️')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})