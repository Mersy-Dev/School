const studentModel = require("../models/studentModels");



const createStud = async (req, res) => {
    try {
        const newStud = new studentModel(req.body);
        console.log(req.body)
        await newStud.save();
        res.status(201).send({ message: "Student has been created successfully", status: true })


    } catch (error) {
        console.log(error)
    }
}

const getStud = async (req, res) => {
    try {
        // const email = req.body.email
        const student = await studentModel.find();
        res.json(student)
    } catch (err) {
        res.status(500).json({ err: 'Failed to get student' });
    }

}
const editUpStud = async (req, res) => {
    const studentId = req.params.id
    const { firstName, lastName, email, password, } = req.body
    try {
        const student = await studentModel.findByIdAndUpdate(studentId, { firstName, lastName, email, password }, { new: true });
        res.json(student)
    } catch (err) {
        res.status(500).json({ err: 'Failed to stud' });
    }

}




const deleteStud = async (req, res) => {
    const studentId = req.params.id

    try {
       const currstud = await studentModel.findByIdAndDelete(studentId);
        // res.sendStatus(204)
        if(!currstud){
            return res.status(404).json({message:`cannot find any teacher with this ID ${studentId}`})
        }res.status(200).json(currstud)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}










module.exports = { createStud, getStud, editUpStud, deleteStud, }
