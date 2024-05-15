require("../config/connection");
require("../config/authStrategy");


const express = require("express");
const router = express.Router();

const {createTeacherAccount, createStudentAccount, createMusicianAccount, deleteAccount} = require("../controllers/siteControllers");

//index

router.get("/", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing landing page", statusCode: 400}});
    }
})

//create account (teacher, student, musician)
    //create account landing page
router.get("/create-account", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Create Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing create account landing page", statusCode: 400}});
    }
})
    //CRUD
router.post("/create-account/teacher", createTeacherAccount);
router.post("/create-account/student", createStudentAccount);
router.post("/create-account/musician", createMusicianAccount);

    //TEST
router.get("/create-account/teacher", createTeacherAccount);
router.get("/create-account/student", createStudentAccount);
router.get("/create-account/musician", createMusicianAccount);

// delete account
    //CRUD
router.delete("/delete-account", deleteAccount)
    //TEST
router.get("/delete-account", deleteAccount)

//login
router.get("/login", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to LOGIN"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing LOGIN landing page", statusCode: 400}});
    }
})

module.exports = router;
