const express = require('express');
const router  = express.Router();

const ProductsController = require('../controller/ProductsController');

//C=Create
router.post("/CreateProduct",ProductsController.CreateProduct);

//C=Read
router.get("/ReadProduct",ProductsController.ReadProduct);

//C=Update
router.post("/UpdataProduct/:id",ProductsController.UpdataProduct);

//C=Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct);


//api routing end point
module.exports=router;