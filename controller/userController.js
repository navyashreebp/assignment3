// const { storesUser } = require("../service/userService")
const user = require("../models/user")
const logger = require("../utils/logger");



module.exports.storeUser=(req,res)=>{
    logger.info('Storeuser abc')
   try {
        user.create(req.body).then(result=>{
           res.status(200).send({message:'Inserted Succesfully',data:req.body})
        }) 
  
    } catch (error) {
      console.log(error,'error');  
    }
   
}

module.exports.deleteUser=(req,res)=>{
    logger.info(req.params,'req.queryParams');
   user.deleteOne({_id:req.params.id}).then(response=>{
    if(response){
        res.status(200).send({"message":"Deleted successfully",data:response})
    }

   })
}
module.exports.getUsers=(req,res)=>{
    logger.info('Get User abc')

    user.find().then(response=>{
        if(response.length>0){
            logger.info(`Get User abc ${JSON.stringify(response)}` )

            res.status(200).send({"message":"All records are.....",data:response})
        }else{
            res.status(500).send({"message":"No records....",data:response})
  
        }
    });

}
module.exports.updateUser=(req,res)=>{
    logger.info('Update User abc')
    user.updateOne({_id:req.params.id},{$set:req.body}).then(result=>{
        res.status(200).send({message:'updated succesfully',data:req.body})
     }) 
}