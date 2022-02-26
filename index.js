const express=require("express")
              //storing express function in a variable 
const router1=require("./Routes/First")
const mongo=require("./shared/Connect")
const app=express();       
// console.log(mongo.connect())
//app.use all http method will use get put post patch delete 
app.use(express.json())                 //converting the http request value to json  //inbuilt  method it also having next fucntion //
mongo.connect()
app.use("/user",router1)
//we dont want to end it will automatically end when we using  express framework
//here nodemon to run that we need nodemon globally then  enter "nodemon start" if we using with admin access try "npx nodemon index.js"
app.listen(4000)           