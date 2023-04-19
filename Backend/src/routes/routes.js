const express=require('express')
const auth=require('../middleware/auth.js')
const userController=require('../controller/userController.js')
const jobController=require('../controller/jobController.js')
const router=new express.Router()

router.get('/',userController.home);
router.post('/signup',userController.createUser);
router.get('/readUser',auth,userController.readUser);
router.patch('/updateUser/:id',auth,userController.updateUser);
router.post('/login',userController.login);
router.post('/logout',auth,userController.logout);

router.get('/jobHome',jobController.home);
router.post('/createJob',auth,jobController.createJob);
router.get('/findAllJob',jobController.findAllJob);
router.get('/findSpecificJob',jobController.findSpecificJob);
router.post('/findAllJobPos',jobController.findAllJobPos);

module.exports=router