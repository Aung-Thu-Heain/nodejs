const express = require('express');
const path = require('path');
const app = express();
let {connectDB} = require('./utils/db')
const userRoutes = require("./routes/user");
app.use(express.json())

const init = ()=>{
    app.listen(3000,()=>{
        console.log("Server started on port 3000");
    });
    const userRoutes = require('./routes/user')
    app.use('/users',userRoutes);
}

connectDB((error)=>{
   if(!error){
       init();
   }else {
       console.log(error);
   }
})




