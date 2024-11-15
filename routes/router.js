const express = require('express')
const usercontroller =  require('../controller/usercontroller')
const taskcontroller =require('../controller/taskcontroller')
// const jwtmiddleware = require('../middleware/jwtmiddleware')

const router =new express.Router()
// register
router.post('/register',usercontroller.registerController)
// login
router.post('/login',usercontroller.loginController)
//  task insertion
router.post('/addtask',taskcontroller.addtaskController)
// // alluserDetailController
router.get('/gettask/:id',taskcontroller.getAllTasksController)

// router.get('/alluserDetail-check',jwtmiddleware,usercontroller.alluserDetailController)

module.exports = router