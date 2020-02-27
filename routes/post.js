const express=require("express");
const postController=require('../controllers/postController')
const router=express.Router();
const {hasName} = require('../validations/validators')

router.get("/" ,postController.index);
router.post("/", hasName, postController.store);

module.exports=router;