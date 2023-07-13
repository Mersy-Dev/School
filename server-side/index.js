const express = require("express");
const colors = require('colors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")

const dotenv = require('dotenv').config();

const app = express();
const userRoutes = require("./routes/userRoutes")
const studRoutes = require("./routes/studRoutes")


const connectDB = require('./config/db');

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.json());
app.use(cors({origin:"*"}))

app.use("/users", userRoutes);
app.use("/student", studRoutes);

connectDB();





const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on ${port}`))
