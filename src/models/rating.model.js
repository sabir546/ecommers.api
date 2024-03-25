const mongoose = require('mongoose');


// Define the Rating schema
const RatingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Assuming you have a User model
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products', // Assuming you have a Product model
        required: true
    },
    rating: {
        type: Number,
        required: true,
      
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Rating = mongoose.model('ratings', RatingSchema);
module.exports = Rating;
