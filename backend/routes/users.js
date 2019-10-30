// REQUIREMENTS
const router = require("express").Router();
const User = require("../models/user");


// INDEX ROUTE
router.get("/", (req, res) => {
    User.find({}, (err, allUsers) => {
        if (err) {
            console.log(err);
        } else {
            res.json(allUsers);
        }
    });
});

// CREATE ROUTE
router.post("/", (req, res) => {

    const username = req.body.username;
    const newUser = new User ({
        username
    })
    newUser.save()
        .then(() => res.json("Summoner Added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

// MODULE EXPORTS
module.exports = router;