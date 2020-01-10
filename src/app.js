const express = require("express")
const body_parser = require("body-parser")
const userRouter = require("./routes/route")
const cors = require('cors')
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(cors())

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json());

app.use(userRouter)
// app.use( (req,res,next) => {console.log(req)
// next()
// })

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})





