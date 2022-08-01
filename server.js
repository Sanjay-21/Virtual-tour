const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser"); 

var http = require('http');
var fs = require('fs');

mongoose.connect("mongodb+srv://admin:pjuSkOIzxsbGfN2Z@cluster0.3b7ya.mongodb.net/formDB", {useNewUrlParser:true}, {useUnifiedTopology:true})
//pjuSkOIzxsbGfN2Z



// createadata schema
const formSchema={
    name:String,
    email:String,
    phone:String,
    course:String
}

const Form=mongoose.model("Form",formSchema);

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/form.html");
})

app.get("/map",function(req,res){
    res.sendFile(__dirname+"/map.html");
})

app.post("/details",function(req,res){
    let newForm=new Form({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.number,
        course:req.body.course
    });
    newForm.save();
    res.redirect("/map");
})

app.listen(process.env.PORT || 3000)
