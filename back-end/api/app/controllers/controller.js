const db = require("../models");
const Marsupilami = db.models;

exports.create = (req,res) =>{
    //Valide request
    if(!req.body.nom){
        res.status(400).send({message:"Content can not be empty!"});
        console.log(req.body);
        return;
    }
    //Create a Marsupilami
    const marsupilami= new Marsupilami({
        nom: req.body.nom,
        age: req.body.age,
        famille: req.body.famille,
        race: req.body.race,
        nourriture: req.body.nourriture,
        friends: req.body.friends
       
    });
    //Save Marsupilami in the database
    marsupilami
        .save(marsupilami)
        .then(data=>{
            res.send(data);

        })
        .catch(err=>{
            res.status(500).send({
                message:
                err.message ||"Some error occured while creating the Marsupilami. "
            });
        });

};

// All Marsupilami
exports.findAll = (req,res) =>{
const nom = req.query.name
var condition = nom ? { nom: {$regex: new RegExp(nom), $options: "i" } } : {};
Marsupilami.find(condition)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving marsupilamis."
        });
    });
};

exports.findOne = (req,res) =>{
    const id= req.params.id;

    Marsupilami.findById(id)
        .then(data => {
            if(!data)
                res.status(404).send({message:"Not found Marsupilami with id" + id});
            else res.send(data);    
        })
        .catch( err => {
            res
                .status(500)
                .send({ message: "Error retrieving Marsupilami with id=" + id });
        });
};

exports.update = (req,res) =>{
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Marsupilami.findByIdAndUpdate(id, req, body, { useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({
                message: `Cannot update Marsupilami with id=${id}. Maybe Marsupilami was not found!`
            });
        }else{
            res.send({message:"Marsupilami was updated successfully."});
        } 
    })
    .catch(err=>{
        res.send(500).send({
            message: " updating Marsupilami with id= " + id
        });
    });
}

exports.delete = (req,res) =>{
    const id = req.params.id;
    
    Marsupilami.findByIdAndRemove(id,{useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(404).send({
                    message: `Cannot delete Marsupilami with id=${id}. maybe Marsupilami was not found`

                })
            }else{
                res.status(500).send({
                    message: "Could not Marsupilami with id=" + id
                });
            }
        });
};

exports.deleteAll = (req,res) =>{
    Marsupilami.deleteMany({})
        .then(data =>{
                res.send({
                    message: `${data.deletedCount} Marsupilamis were deleted successfully!`

                });
        })
        .catch(err=>{
            res.status(500).send({
                message:
                err.message || "Some error occurrend while removing all Marsupilamis."
            });
        });
};






