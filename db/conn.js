 
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/youtubeRegistration")
// .then(() => {
//     console.log("Connection successful");
// })
// .catch((err) => {
//     console.error("Connection error:", err);
// });

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/youtubeRegistration");
        console.log("Connection successful");
    } catch (err) {
        console.error("Connection error:", err);
        process.exit(1); // Exit process with failure
    }
};

connectDB();

module.exports = connectDB;
