// services/wishlistService.js

const wishlistRepository = require('../repositories/wishlistRepository');

// const addToWishlist = async (userId, stockId, stockName) => {
//   return wishlistRepository.addToWishlist(userId, stockId, stockName);
// };
const addToWishlist = async (stockId, symbol, name, currency,exchange,mic_code,country,type) => {
  return wishlistRepository.addToWishlist(stockId,symbol, name, currency,exchange,mic_code,country,type);
};

// const getWishlistItems = async (userId) => {
//   return wishlistRepository.getWishlistItems(userId);
// };
const getWishlistItems = async () => {
  return wishlistRepository.getWishlistItems();
};

// const removeFromWishlist = async (userId, stockId) => {
//   return wishlistRepository.removeFromWishlist(userId, stockId);
// };
const removeFromWishlist = async (stockId) => {
  return wishlistRepository.removeFromWishlist(stockId);
};
module.exports = {
  addToWishlist,
  getWishlistItems,
  removeFromWishlist,
};
