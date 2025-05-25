const { merge } = require('../routes/route')
const student=require('../models/studentmodel')

exports.getstudents=async(req,res)=>{
    try{
    const Students=await student.find()
    res.send(Students)
    }
    catch(error){
        res.status(500).send(error.message)
        
    }
}
exports.createstudent=async(req,res)=>{
    try{
        const newstudent=await student.create(req.body)  
        res.send(newstudent)      
    }
    catch(error){
        res.status(500).send(error.message)

    }
}
exports.getstudent=async(req,res)=>{
      
    try{
        const Student=await student.findById(req.params.id)
        if(!Student) return res.status(404).send('Student not found')
            res.send(Student)

}
catch(error){
    res.status(500).send(error.message)
}
}
exports.updatestudent=async(req,res)=>{
    try{
        const foundstudent=await student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!foundstudent) return res.status(404).send('Student not found')
            res.send(foundstudent)

    }
    catch(error){
        res.status(500).send(error.message)
    }


}
exports.deletestudent=async()=>{
    try{
        const deletestudent=await student.findByIdAndDelete(req.params.id)
        if(!deletestudent) return res.status(404).send('Student not found')
            res.send(deletestudent)

    }
    catch(error){
        res.status(500).send(error.message)
    }

}
