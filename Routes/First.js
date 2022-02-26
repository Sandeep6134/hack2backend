const express = require("express");
const router=express.Router();
const productModule=require("../modules/productmodule")

router.get("/get",productModule.getProduct)
router.post("/create",productModule.createproduct)
router.put("/update/:id",productModule.updateProduct)
router.delete("/delete/:id",productModule.deleteProduct)

module.exports=router;