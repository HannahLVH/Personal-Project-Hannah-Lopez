const express = require("express");
const router = express.Router();

const {createTeacherAccount, createStudentAccount, createMusicianAccount, deleteAccount} = require("../controllers/siteControllers");

//index

router.get("/", (req, res, next) => {
    res.json("Index landing page")
})

//create account (teacher, student, musician)

router.get("/create-account", (req, res, next) => {
    res.json("Create account landing page")
})

router.get("/create-account/teacher", createTeacherAccount)

router.post("/create-account/teacher", (req, res, next) => {
    res.json("Teacher account")
})

router.get("/create-account/student", createStudentAccount)

router.post("/create-account/student", (req, res, next) => {
    res.json("Student account")
})

router.get("/create-account/musician", createMusicianAccount)

router.post("/create-account/musician", (req, res, next) => {
    res.json("Musician account")
})

// delete account

router.get("/delete-account", deleteAccount)

router.delete("/delete-account", (req, res, next) => {
    res.json("Bye bye, account!")
})

//login

router.get("/login", (req, res, next) => {
    res.json("Login landing page")
})

module.exports = router;
