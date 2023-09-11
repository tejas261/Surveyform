const express = require('express');
const app = express(); 
const path = require('path');
const Survey = require('./database/models/schema');
const { log } = require('console');
app.set('view engine','ejs');

require ('./database/connection');
const port = process.env.PORT || 5000

//To change the directory to views and public
const static_path = path.join(__dirname,'../src/views');
// console.log(static_path);
app.use(express.static(static_path));
app.use(express.static(path.join(__dirname,'../public')))

// important to get info from the input fields
app.use(express.json());
app.use(express.urlencoded({extended:false}));

let id = '';

app.listen(port,()=>{
    console.log("Server started at "+ port);
})

app.get("/",(request,response)=>{
    response.render("index");
})

app.post('/page1',async(req,res)=>{
    const response = new Survey(req.body);
    await response.save();
    const data = JSON.stringify(response._id);
    id = data.slice(1, 25);
    res.redirect("/page2");
})

app.get("/page2",(req,res)=>{
    res.render("page2");
})

app.post('/page2',async(req,res)=>{
    try {
        const response = await Survey.findByIdAndUpdate(id, { ...req.body });
        res.redirect('/page3');
    }
    catch (error) {
        res.status(400).send(error)
    } 
})

app.get('/page3',(req,res)=>{
    res.render("page3");
})

app.post("/page3", async(req, res) => {
    const response = await Survey.findByIdAndUpdate(id, { ...req.body });    
    res.status(200).send("success");
})