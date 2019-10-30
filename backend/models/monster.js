// REQUIREMENTS
const mongoose = require("mongoose");


// SCHEMA MODEL
const monsterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    summoner: {type: String, required: true},
    birthday: {type: Date, required: true},
    likes: {type: String, required: true},
    abilities: {type: String, required: true},
});


// EXPORT SCHEMA MODEL
module.exports = mongoose.model("Monster", monsterSchema);