let mongoose=require('mongoose');
const joi=require('joi');

let ListSchema=mongoose.Schema({
    Id:Number,
    Title:String,
    Description:String
})

const joischema=joi.object({
    Id:joi.number().required(),
    Title:joi.string().required(),
    Description:joi.string().required()
})

const list=mongoose.model("List",ListSchema);
module.exports={list,joischema};