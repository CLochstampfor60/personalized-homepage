const express = require('express')
const app = express()
app.listen(2000, () => console.log('jabroni listening at 2000'))
app.use(express.static('public'))
require('dotenv').config()

// console.log(process.env)
// const api_key = process.env.WEATHER_API_KEY

// Serve web page, index.html. The client NEVER sees the Index.js.
// Index.js does the following:
// 1. Host the static files (i.e., index.html). This can include functionality too.
// 2. Save to database
// 3. Authentication
