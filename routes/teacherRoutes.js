const express = require("express");
const router = express.Router();

//my account: teacher landing page

router.get("/", (req, res, next) => {
    res.json("my account: teacher landing page");
    try {
        router.get("/profile", (req, res, next) => {
            res.json("teacher's profile");
        })
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;