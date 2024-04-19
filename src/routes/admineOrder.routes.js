const express=require("express")
const router=express.Router();
const orderController=require('../controller/adminOrder.controller')
const authenticate=require('../middleware/authenticate')
router.get("/",authenticate,orderController.getAllOrders);
router.put("/:orderId/confirmed",authenticate,orderController.confirmedOrder);
router.put('/:orderId/ship',authenticate,orderController.shipOrder);
router.put("/:orderId/deliver",authenticate,orderController.deliverOrder);
router.put('/:orderId/cancel',authenticate,orderController.confirmedOrder);
router.put('/:orderId/delete',authenticate,orderController.deleteOrder);
module.exports=router;