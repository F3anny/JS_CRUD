const express=require('express')
const router=express.Router()
const StudentController=require('../controllers/studentController')

router.get('/student',StudentController.getstudents)
router.post('/student',StudentController.createstudent)
router.get('/student/:id',StudentController.getstudent)
router.put('/student/:id',StudentController.updatestudent)
router.delete('/student/:id',StudentController.deletestudent)

module.exports=router
