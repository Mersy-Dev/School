const mongoose = require("mongoose");





const studentSchema = new mongoose.Schema({ 
    firstName:String,
    lastName:String,
    email:{type:String, unique:true, required:true},
    password:String,
    address:String,
    nationalty:String,
    courses:{
        
    },

 

},




);

let studentModel = mongoose.models.student_tbs || mongoose.model("student_tbs", studentSchema);

module.exports =  studentModel
