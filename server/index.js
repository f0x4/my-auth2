const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const regRoute = require("./routes/regRoute")
const loginRoute = require("./routes/loginRoute")

const app = express()
const PORT = config.get('serverPort') // Порт из ../config/default.json

const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api", regRoute)
app.use("/api", loginRoute)

const start = async () => {
    try {
            await mongoose.connect(config.get('dbUrl'))

            app.listen(PORT, () => {
            console.log('Server started on port', PORT, "...")
        })
    } catch (e) {
        console.log(e)
        
    } 
}

start()