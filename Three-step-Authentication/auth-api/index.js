import express from "express"
import cors from "cors"
import multer from "multer"
import morgan from "morgan"
import connect from "./database/conn.js"
import dotenv from "dotenv"
import authRoute from "./routes/router.js"

dotenv.config()


const app = express()



const port = 8080


app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
app.disable('x-powered-by')


app.get('/', (req, res) => {
    res.status(201).json("Home GET REquest")
})

app.use('/api', authRoute)

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Sever connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error, 'Cannot connect to the server')
    }
})