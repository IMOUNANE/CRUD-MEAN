const { response } = require("express");

module.exports = app => {
    const marsupilamis = require("../controllers/controller.js");
    const User = require('../models/user.js')

    app.post('/api/login', async (req,res)=>{
        const {username,password}=req.body
      
        const resp = await  User.findOne({username,password})
        console.log(resp)
        if(!resp){
            //user login incorect 
            console.log("incorrect details")
            res.send({
                success:false,
                message:"user don't exist"
            })
        } else {
            //log issue
            console.log("login you")
            
            res.send({
                success:true,
                message:"user exist",
                id:resp.id
            })
        }
        
    })

    app.post('/api/register', async (req,res)=>{
       
        const {username,password}=req.query
        console.log(username)
        const user = new User({
            username,
            password
        })
        
        const result = await user.save()
        console.log(result)
        res.json(result)
        
    })
    
    
    


    
    var router = require("express").Router();

    router.post("/",marsupilamis.create);

    router.get("/",marsupilamis.findAll);

    router.get("/:id",marsupilamis.findOne);

    router.put("/:id",marsupilamis.update);

    router.delete("/:id",marsupilamis.delete);

    router.delete("/",marsupilamis.deleteAll);

    
    app.use("/api/marsupilamis",router);
   
    

};