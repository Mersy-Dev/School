const express = require("express");
const { createStud, getStud, editUpStud, deleteStud } = require("../controllers/studController");
// const { protect } = require("../middleware/authMiddleware");
const studRoutes = express.Router()


studRoutes.post("/creaStud", createStud)
studRoutes.get("/getStud", getStud)
studRoutes.get("/editStud/:id", editUpStud)
studRoutes.put("/editStud/:id", editUpStud)
studRoutes.delete("/deletStud/:id", deleteStud)


module.exports = studRoutes
