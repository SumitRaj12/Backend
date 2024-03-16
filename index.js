const express = require('express')
require('dotenv').config();

const app = express();
const port = process.env.PORT|3000;

app.get('/',(req,res)=>{
    res.json({message:"Om"});
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})