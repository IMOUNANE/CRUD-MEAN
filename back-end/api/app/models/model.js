module.exports = mongoose =>{
    var schema = mongoose.Schema(
        {
            nom: String,
            age: Number,
            famille: String,
            race:  String,
            nourriture: String
        },
        { timestamps:true }
    );
    schema.method("toJSON", function(){
        const { __v,__id, ...object} = this.toObject();
        object.id =_id;
        return object;
    });

    const Marsupilami = mongoose.model("marsupilami",schema);
    return Marsupilami;

};