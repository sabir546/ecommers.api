const express=require("express")
const router=express.Router();
const authController=require('../controller/authController')
router.post('/signup',authController.register);
router.post('/sigin',authController.login);
module.exports=router;
