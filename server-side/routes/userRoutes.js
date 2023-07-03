const express = require("express");
const {signUp, createTeacher, createStudent, getTeachers, editUpTeachers, deleteTeacher,  } = require("../controllers/userControllers");
const userRoutes = express.Router()

userRoutes.post("/sign", signUp);
userRoutes.post("/creaTeachers", createTeacher)
userRoutes.get("/getTeach", getTeachers)
userRoutes.get("/editTeach/:id", editUpTeachers)
userRoutes.put("/editTeach/:id", editUpTeachers)
userRoutes.delete("/deletTeach/:id", deleteTeacher)

userRoutes.post("/creatStd", createStudent);


module.exports = userRoutes
