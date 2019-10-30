// SET UP REQUIREMENTS =================================
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// ROUTE REQUIREMENTS ==================================
const monstersRoute = require("./routes/monsters");
const usersRoute = require("./routes/users");

// APP USE =============================================
app.use(express.json()); // this will allow us to use bodyParser()

// MONGO ATLASS CONNECTION STRING & .env file ==========
const URL = process.env.MONGO_ATLAS_CONNECTION_STRING;

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.once("open", () => {
    console.log("MongoAtlas connection successful!");
});

// ROUTERS =============================================
app.use("/monsters", monstersRoute);
app.use("/users", usersRoute);

// LISTENER ============================================
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});