const express = require('express')
const router =require('./routes/routes')
const cors = require('cors')
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express()



//midleware
app.use(cors())
app.use(express.json())
app.use('/api/v1/todo',router)



app.get('/',(req,res)=>{
    res.send("you are on the Home page ")
})

port = process.env.port|| 3000
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        
      app.listen(port,()=>{
        console.log('server is listenig on the port 3000')
})
    } catch (error) {
        console.log(error)
    }
}
start()


