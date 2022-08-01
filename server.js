const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser"); 

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


app.post("/",function(req,res){
    let newForm=new Form({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.number,
        course:req.body.course
    });
    newForm.save();
    res.redirect("/index.html");
})


app.listen(process.env.PORT || 3000)
