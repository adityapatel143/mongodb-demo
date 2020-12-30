const mongoose = require("mongoose");

// COnnection to Database
mongoose
    .connect("mongodb://localhost/playground")
    .then(() => {
        console.log("Successfully connected to Mongodb...");
    })
    .catch(() => {
        console.error("Error connecting Mongodb....", err);
    });

// Making Schema
/* These types of data types can be used
    String, Number, Boolean, Date, Buffer, ObjectID, Array */
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
});

// Compile schema into model Model
// In other words creating Class
const Course = mongoose.model("Course", courseSchema);

// Saving data into database.
// In other words creating object
const course = new Course({
    name: "Node.js course",
    author: "Aditya",
    tags: ["node", "backend"],
    isPublished: true,
});
