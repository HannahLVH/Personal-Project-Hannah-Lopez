const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res, next) => {
    res.json("Index landing page")
})
//create account (teacher, student, musician)
router.get("/create-account", (req, res, next) => {
    res.json("Create account landing page")
    try {
        //siteRoutes need new path if is nested
        router.get("/teacher-account", (req, res, next) => {
            res.json("Teacher account");
        })
    } catch (error) {
        console.log(error);
    }
})

router.post("/create-account/teacher", (req, res, next) => {
    res.json("Teacher account")
})
router.post("/create-account/student", (req, res, next) => {
    res.json("Student account")
})
router.post("/create-account/musician", (req, res, next) => {
    res.json("Musician account")
})

router.delete("/delete-account", (req, res, next) => {
    res.json("Bye bye, account!")
})

//login
router.get("/login", (req, res, next) => {
    res.json("Login landing page")
})

module.exports = router;
