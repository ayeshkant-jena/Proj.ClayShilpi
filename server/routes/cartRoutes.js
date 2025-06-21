const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const { addToCart, removeFromCart, getCart } = require("../controller/cartController");

router.post("/addtocart", fetchUser, addToCart);
router.post("/removefromcart", fetchUser, removeFromCart);
router.post("/getcart", fetchUser, getCart);

module.exports = router;
