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

router.post("/create-account/teacher", createTeacherAccount);
router.post("/create-account/student", createStudentAccount);
router.post("/create-account/musician", createMusicianAccount);

//for testing purposes
router.get("/create-account/teacher", (req, res, next) => {
    res.json("Create Teacher Account")
})
router.get("/create-account/student", (req, res, next) => {
    res.json("Create Student Account")
})
router.get("/create-account/musician", (req, res, next) => {
    res.json("Create Musician Account")
})

// delete account

router.delete("/delete-account", deleteAccount)
// for testing purposes
router.get("/delete-account", (req, res, next) => {
    res.json("Bye bye, account!")
})

//login
router.get("/login", (req, res, next) => {
    res.json("Login landing page")
})

module.exports = router;
