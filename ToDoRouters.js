const express=require('express');
const {Read,Insert,Update,Delete,ReadByName}=require('./ToDoController');
let router=express.Router();

router.get("/getList",Read);
router.get("/getListByName",ReadByName);
router.post("/sendList",Insert);
router.put("/updateList",Update);
router.delete("/deleteList",Delete);

module.exports=router;