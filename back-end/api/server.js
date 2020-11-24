const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app=express();

var corsOptions ={
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));


const db = require("./app/models");

db.mongoose
  .connect(db.url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(()=>{
      console.log("Connected Sucessfull")
  })
  .catch(err => {
    console.log("Cannot connect to the database");
    process.exit();
  });

  //simple route
  app.get("/",(req,res)=>{
      res.json({message:"welcome to my application"});
  });






  require("./app/routes/routes")(app);

  //set port listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT,()=>{
      console.log(`Server is running on port ${PORT}.`);
  });