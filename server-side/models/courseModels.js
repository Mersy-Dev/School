const mongoose = require('mongoose');

// Define the schema for the course
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['Programming', 'Design', 'Business', 'Data Science', 'Data Analysis',' UI/UX' ], required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
});

// Create the course model
const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
