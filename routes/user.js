const { Router }= require("express");

const {

  storeUser,

  deleteUser,

  getUsers,

  updateUser,

} =require ("../controller/userController");


const router = Router();


// Render all tasks

router.get("/", getUsers);

router.post("/user/add", storeUser);

router.post("/user/:id/update", updateUser);

router.delete("/user/:id/delete", deleteUser);





module.exports={router}