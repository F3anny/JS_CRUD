const express=require('express')
const app=express()
const cors=require('cors')
const connection=require('./config/db')
const StudentAPI=require('./routes/route')

app.use(express.json())
app.use(cors())
app.use('/api',StudentAPI)



const port=process.env.PORT ||9000
app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})

