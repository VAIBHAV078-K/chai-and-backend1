// const express = require(`express`);
import express from 'express';
const app = express();
  
const port = 4000;

app.listen(port ,()=>{
  console.log(`server is live working on the ${port}` );
  
});
app.get( `/`, (req,res)=>{
 
   res.send("hello world !")
  
});
app.get( `/twitter`, (req,res)=>{
 
   res.send("hii ! i am a vaibhav patel !")
  
});
app.get( `/login`, (req,res)=>{
 
   res.send(`<h1>i am abeginner backend devloper in nit</h1>`)
  
});
app.get( `/facebook`, (req,res)=>{
 
   res.send(`<button>Kanha patel</button>`)
  
});