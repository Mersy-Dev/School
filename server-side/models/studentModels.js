const mongoose = require("mongoose");





const studentSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     default: () => mongoose.Types.ObjectId().toString()
    // },
    firstName: String,
    lastName: String,
    userName: String,
    email: { required: true, type: String, unique: true },
    password: String,
    address: String,
    address2: { required: true, type: String },
    city: { required: true, type: String },
    phone: { required: true, type: Number },
    zip: {
        required: true, type: Number

    }


},




);

let studentModel = mongoose.models.student_tbs || mongoose.model("student_tbs", studentSchema);

module.exports = studentModel
