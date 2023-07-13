const express = require("express");
const {signUp, createTeacher, createStudent, getTeachers, editUpTeachers, deleteTeacher, loGin, getAdm,  } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const userRoutes = express.Router()

userRoutes.post("/sign", signUp);
userRoutes.post("/login", loGin)
userRoutes.get("/getadm",protect, getAdm)

userRoutes.post("/creaTeachers", createTeacher)
userRoutes.get("/getTeach", getTeachers)
userRoutes.get("/editTeach/:id", editUpTeachers)
userRoutes.put("/editTeach/:id", editUpTeachers)
userRoutes.delete("/deletTeach/:id", deleteTeacher)



module.exports = userRoutes
