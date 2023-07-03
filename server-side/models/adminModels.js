const mongoose = require("mongoose");



const adminSchema = new mongoose.Schema({
    firstName: String, 
    lastName:String,
    userName:String, 
    email:{required:true, type:String, unique:true},
    password:String
});


let adminModel = mongoose.models.admin_tbs || mongoose.model("admin_tbs", adminSchema);



module.exports = adminModel
