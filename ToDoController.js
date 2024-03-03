const {list,joischema} = require('./ToDoModel');

const Read =(req,res)=>{
    UserModel.find()
    .then((resp)=>{
        console.log("Data Retrieve Successfully");
        res.send({resp})
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Error, Can't Retrieve Data"})
    })
}

const ReadByName =(req,res)=>{
    UserModel.findOne({Id:req.query.Id})
    .then((resp)=>{
        console.log("Data Retrieve Successfully");
        res.send({resp})
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Error, Can't Retrieve Data"})
    })
}

const Insert =(req,res)=>{
    const {error,valid}=joischema.validate(req.body)
    if(error){
        res.send({message:"Validate Error Occur..."})
    }
    else{
    let Data= new UserModel(valid)
    Data.save()
    .then((resp)=>{
        console.log(resp);
        res.send({message:"Data Enter Successfully"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Error Occur"})
    })}
}

const Update =(req,res)=>{
    UserModel.updateOne({Id:req.query.Id},req.body)
    .then((resv)=>{
        console.log("List Updated Successfully.");
        res.send(resv);
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Error Occured"});
    })
}

const Delete =(req,res)=>{
    UserModel.deleteOne({Id:req.query.Id})
    .then((resp)=>{
        console.log("List Deleted Successfully.");
        res.send(resp);
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Error Occured"})
    })
}

module.exports={Read,Insert,Update,Delete,ReadByName};