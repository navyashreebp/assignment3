const express= require('express');
const { storeUser } = require('./controller/userController');
const app = express();
const port = 3000;
const {router} = require('./routes/user');




const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/node_api", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: ")); 
db.once("open", function () {
  console.log("Connected successfully");
});



app.use(express.json())
app.use('/',router);


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

module.exports = app;