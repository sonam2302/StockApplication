// routes/wishlistRoutes.js

const express = require('express');
const wishlistController = require('../controllers/wishlistController');

const router = express.Router();

router.post('/wishlist', wishlistController.addToWishlist);
// router.get('/wishlist/:userId', wishlistController.getWishlistItems);
router.get('/wishlists', wishlistController.getWishlistItems);

// router.delete('/wishlist/:userId/:stockId', wishlistController.removeFromWishlist);
router.delete('/wishlist/:stockId', wishlistController.removeFromWishlist);
module.exports = router;
