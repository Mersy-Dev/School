const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    firstName: String, 
    lastName:String,
    userName:String, 
    email:{required:true, type:String, unique:true},
    password:String,
    address:String,
    address2:{required:true, type:String},
    city:{required:true, type:String},
    phone: { required:true, type:Number },
    zip:{
        required:true, type:Number

    } 

});


let teacherModel = mongoose.models.teacher_tbs || mongoose.model("teacher_tbs", teacherSchema);



module.exports = teacherModel
