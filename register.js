const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    PRN : {
        type:String,
        require:true
    },
    gender :{
        type:String,
        require:true
    },
    Sports :{
        type:String,
        require:true
    },
    year :{
        type:String,
        require:true
    },
    age :{
        type:String,
        require:true
    },
    email :{
        type:String,
        require:true,
        unique:true
    },
    phone :{
        type:String,
        require:true,
        unique:true
    }
})


//we need to create a collection

const Register = new mongoose.model("Register",studentSchema);

module.exports = Register;


























