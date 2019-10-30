// REQUIREMENTS
const mongoose = require("mongoose");


// SCHEMA MODEL
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minLength: 3
    }
});


// EXPORT SCHEMA MODEL
module.exports = mongoose.model("User", userSchema);