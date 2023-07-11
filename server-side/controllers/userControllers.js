const adminModel = require("../models/adminModels");
const teacherModel = require("../models/teacherModels");
const studentModel = require("../models/studentModels");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');






const signUp = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body
    const userExists = await adminModel.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const admin = await adminModel.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    })



    if (admin) {
        res.status(201).json({
            _id: admin.id,
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email,
            token: generateToken(admin._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})


const loGin = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // checking for admin email
    const admin = await adminModel.findOne({ email })
    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email,
            token: generateToken(admin._id),
        })
        // throw new message({mess age:"Account has been login successfully", status:true})
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }


})

const getAdm = asyncHandler(async (req, res) => {
    res.status(200).json(req.admin)
})



const createTeacher = async (req, res) => {
    try {
        const newTeacher = new teacherModel(req.body);
        console.log(req.body)
        await newTeacher.save();
        res.status(201).send({ message: "Teachers has been created successfully", status: true })


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
    const { firstName, lastName, email, password, } = req.body
    try {
        const teacher = await teacherModel.findByIdAndUpdate(teacherId, { firstName, lastName, email, password }, { new: true });
        res.json(teacher)
    } catch (err) {
        res.status(500).json({ err: 'Failed to get teachers' });
    }

}

const deleteTeacher = async (req, res) => {
    const teacherId = req.params.id

    try {
        await teacherModel.findByIdAndDelete(teacherId);
        res.sendStatus(204)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}
const createStudent = async (req, res) => {
    try {
        const newStudent = new studentModel(req.body);
        console.log(req.body)
        await newStudent.save();
        res.status(201).send({ message: "Student has been created successfully", status: true });


    } catch (error) {
        console.log(error)
    }
}
const deleteStudent = async () => {

}



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}






module.exports = { signUp, loGin, getAdm, createTeacher, createStudent, getTeachers, editUpTeachers, deleteTeacher, generateToken }
