const express=require("express")
const router=express.Router();
const cartController=require('../middleware/authenticate');
const authenticate = require("../middleware/authenticate");
router.get("/",authenticate.cartController.findUserCart);
router.put('/add',authenticate,cartController.addItemToCart);

module.exports=router;