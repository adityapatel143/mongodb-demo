const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/playground")
    .then(() => {
        console.log("Successfully connected to Mongodb...");
    })
    .catch(() => {
        console.error("Error connecting Mongodb....", err);
    });
