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

// SHOW ROUTE
router.get("/:id", (req, res) => {
    Monster.findById(req.params.id, (err, foundMonster) => {
        if (err) {
            console.log(err);
        } else {
            res.json(foundMonster);
        }
    })
});

// UPDATE ROUTE
router.put("/:id", (req, res) => {
    
    const updatedMonster = {
        name: req.body.name,
        summoner: req.body.summoner,
        birthday: Date.parse(req.body.birthday),
        likes: req.body.likes,
        abilities: req.body.abilities
    }

    Monster
    .findByIdAndUpdate(
        req.params.id, 
        updatedMonster, 
        (err, foundMonster) => {
            if (err) {
                console.log(err);
            } else {
                foundMonster.save();
                res.json("Monster Updated!");
            }
        }
    )
});

// DELETE ROUTE
router.delete("/:id", (req, res) => {
    Monster.findByIdAndDelete(req.params.id)
        .then(() => res.json("Monster Deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});


// MODULE EXPORTS
module.exports = router;