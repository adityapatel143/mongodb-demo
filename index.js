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

async function createCourse() {
    // Creating data.
    // In other words creating object
    const course = new Course({
        name: "Angular course",
        author: "Aditya",
        tags: ["angular", "frontend"],
        isPublished: true,
    });
    // Saving Data
    // This is an async process.
    // it will return a unique ID.
    const result = await course.save();
    console.log(result);
}

//createCourse();

// Fetching data
async function getCourses() {
    //const courses = await Course.find(); // This will get all the data.
    const courses = await Course.find({
        author: "Aditya",
        isPublished: true,
    })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

getCourses();
