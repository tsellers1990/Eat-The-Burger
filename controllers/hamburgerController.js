const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// router.get("/", function(req, res) {
//     burger.all(function(data){
//         let hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });


router.get("/", function(req, res) {
    res.redirect("/burgers")
})

router.get("/burgers", function(req,res) {
    burger.all(function(burgerData) {
        res.render("index", { burger_data: burgerData})
    });
});

// router.post("/burgers/create", function(req,res) {
//     // console.log(req.body, req.body.burger_name)
//     burger.create(req.body.burger_name, function(result) {
//         console.log(result);
//         res.redirect("/")
//     })
// })

router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    burger.create([
        "name", "isEaten"
    ], [
        req.body.name, req.body.isEaten
    ], function(result) {
        res.json({id: result.insertId});
    });
});

// router.put("/api/burgers/:id", function(req, res) {
//     let condition = "id = " + req.params.id;
//     console.log("condition", condition);
//     burger.update({
//         isEaten: req.body.isEaten
//     }, condition, function(result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;