// SET UP REQUIREMENTS =================================
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// MONGO ATLASS CONNECTION STRING & .env file ==========
const URL = process.env.MONGO_ATLAS_CONNECTION_STRING;

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
    console.log("MongoAtlas connection successful!");
});

// LISTENER ============================================
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});