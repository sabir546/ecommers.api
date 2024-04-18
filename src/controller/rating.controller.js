const reviewService=require('../services/rating.services.js')
const createRating = async (req, res) => {
   const user = req.user;
   try {
     const review = await reviewService.createRating( req.body,user);
     return res.status(201).send(review);
   } catch (error) {
     return res.status(500).send({ error: error.message });
   }
 };

 const getAllRatings = async (req, res) => {
   const productId=req.params.productId;
   try {
     const reviews = await ratingService.getAllRatings( productId);
     return res.status(201).send(reviews);
   } catch (error) {
     return res.status(500).send({ error: error.message });
   }
 };

 module.exports={createRating,getAllRatings}