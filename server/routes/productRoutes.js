const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  addProduct,
  removeProduct,
  getAllProducts,
  getNewCollections,
  getPopularIdols
} = require("../controller/productController");

// Multer setup
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) =>
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage });

router.use("/images", express.static("upload/images"));
router.post("/upload", upload.single("product"), (req, res) => {
  res.json({ success: 1, image_url: `http://localhost:4000/images/${req.file.filename}` });
});

router.post("/addproduct", addProduct);
router.post("/removeproduct", removeProduct);
router.get("/allproducts", getAllProducts);
router.get("/newcollections", getNewCollections);
router.get("/popularinidols", getPopularIdols);

module.exports = router;
