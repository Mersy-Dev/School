const adminModel = require("../models/adminModels");
const teacherModel = require("../models/teacherModels");
const studentModel = require("../models/studentModels");



const signUp = async(req, res, next) => {
    let errors = []
    let email = req.body.email
    try {
        await adminModel.find({ email: email }).then((result) => {
            if (result.length > 0) {
                res.status(409).send({message:"Email already exists.", status:false})
            }else{
                let form = new adminModel(req.body)
                form.save().then((result2)=>{
                    console.log(result2)
                    res.status(201).send({message:"Account has been created successfully", status:true})
                }).catch((error)=>{
                    console.log(error)
                })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error.message || "Internal server error", status:false})
        next(error)
    }

    // console.log(req.body)
}

const createTeacher = async(req, res) => {
   try {
        const newTeacher = new teacherModel(req.body);
        console.log(req.body)
        await newTeacher.save();
        res.status(201).send({message:"Teachers has been created successfully", status:true})


    } catch (error) {
            console.log(error)
    }
}

const getTeachers = async (req, res) => {
    try {
        // const email = req.body.email
        const teacher = await teacherModel.find();
        res.json(teacher)
    } catch (err) {
        res.status(500).json({ err: 'Failed to get user' });
    }

}
const editUpTeachers = async (req, res) => {
    const teacherId = req.params.id
    const {firstName, lastName, email, password, } = req.body
    try {
        const teacher = await teacherModel.findByIdAndUpdate(teacherId, {firstName, lastName, email, password}, {new:true});
        res.json(teacher)
    } catch (err) {
        res.status(500).json({ err: 'Failed to get teachers' });
    }

}

const deleteTeacher = async(req, res) =>{
    const teacherId = req.params.id

    try {
        await teacherModel.findByIdAndDelete(teacherId);
        res.sendStatus(204)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}
const createStudent = async(req, res) => {
    try {
         const newStudent = new studentModel(req.body);
         console.log(req.body)
         await newStudent.save();
         res.status(201).send({message:"Student has been created successfully", status:true});
 
 
     } catch (error) {
             console.log(error)
     }
 }
 const deleteStudent = async() =>{
    
 }
 
 




module.exports = { signUp, createTeacher, createStudent, getTeachers, editUpTeachers, deleteTeacher}
