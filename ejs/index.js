// import express from 'express';
const express = require (`express`);
const app = express();
  
const port = 4000;

app.listen(port ,()=>{
  console.log(`server is live working on the ${port}` );
  
});
app.set("view engine" ,"ejs");
app.get( `/apple`, (req,res)=>{
 
   res.render("home");  
  
});