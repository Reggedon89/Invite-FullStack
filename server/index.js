const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/api", routes)

app.listen(8000, () => {
  console.log("Server listening on port 8000")
})