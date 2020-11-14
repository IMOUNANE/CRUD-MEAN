module.exports = app => {
    const marsupilamis = require("../controllers/controller.js");
    
    var router = require("express").Router();

    router.post("/",marsupilamis.create);

    router.get("/",marsupilamis.findAll);

    router.get("/:id",marsupilamis.findOne);

    router.put("/:id",marsupilamis.update);

    router.delete("/:id",marsupilamis.delete);

    router.delete("/",marsupilamis.deleteAll);

    app.use("/api/marsupilamis",router);

    
    

};