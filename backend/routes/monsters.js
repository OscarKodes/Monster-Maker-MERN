// REQUIREMENTS
const router = require("express").Router();
const Monster = require("../models/monster");


// INDEX ROUTE
router.get("/", (req, res) => {
    Monster.find({}, (err, allMonsters) => {
        if (err) {
            console.log(err);
        } else {
            res.json(allMonsters);
        }
    });
});

// CREATE ROUTE
router.post("/", (req, res) => {
    const name = req.body.name;
    const summoner = req.body.summoner;
    const birthday = req.body.birthday;
    const likes = req.body.likes;
    const abilities = req.body.abilities;

    const newMonster = new Monster ({
        name, 
        summoner, 
        birthday, 
        likes, 
        abilities
    })

    newMonster.save()
        .then(() => res.json("New Monster Created!"))
        .catch(err => res.status(400).json("Error: " + err))
});


// MODULE EXPORTS
module.exports = router;