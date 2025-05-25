const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/Real_deal').then(()=>{
    console.log('Connected to database successfully')
}).catch(()=>{
    console.log('There has been an error in the connection')
})

