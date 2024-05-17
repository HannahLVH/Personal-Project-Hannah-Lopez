//Signup, Login, Logout Routes
require("../config/connection");
require("../config/authStrategy");


const express = require("express");
const router = express.Router();

const {loginLocalFailed, logoutRequest, signupRequest} = require("../controllers/siteControllers");

//index

// router.get("/", (req, res, next) => {
//     try {
//         if (200) {
//             res.status(200).json({success: {message: "Route to Landing Page"}, statusCode: 200,})
//         }
//     } catch (error) {
//             res.status(400).json({error: {message: "Something went wrong while accessing landing page", statusCode: 400}});
//     }
// })

//create account (teacher, student, musician)
    //create account landing page
// router.get("/create-account", (req, res, next) => {
//     try {
//         if (200) {
//             res.status(200).json({success: {message: "Route to VIEW Create Account Landing Page"}, statusCode: 200,})
//         }
//     } catch (error) {
//             res.status(400).json({error: {message: "Something went wrong while accessing create account landing page", statusCode: 400}});
//     }
// })
//     //CRUD
// router.post("/create-account/teacher", createTeacherAccount);
// router.post("/create-account/student", createStudentAccount);
// router.post("/create-account/musician", createMusicianAccount);

//     //TEST
// router.get("/create-account/teacher", createTeacherAccount);
// router.get("/create-account/student", createStudentAccount);
// router.get("/create-account/musician", createMusicianAccount);

// delete account
    //CRUD
// router.delete("/delete-account", deleteAccount)
//     //TEST
// router.get("/delete-account", deleteAccount)

//login

router.post("/login/local",
    passport.authenticate("local", {failureRedirect: "/login/local/failed"}), (req, res, next) => {
        res.status(200).json({success: {message: "User logged in"}, 
        data:{
            username: req.user.username, 
            firstName: req.user.firstName,
            lastName: req.user.lastName,
        },
        statusCode: 200,
        });
    }
);

router.get("/login/local", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to LOGIN"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing LOGIN landing page", statusCode: 400}});
    }
})

router.get("/login/local/failed", loginLocalFailed);

router.get("/logout", logoutRequest);

router.post("/signup", signupRequest);

//For testing purposes
router.get("/signup", (req, res, next) => {
    res.json("Path to signup")
})


//Github strategy

router.get("/login/github", passport.authenticate("github"));

router.get("/login/github/failed", (req, res, next) => {
    res.status(400).json({message: "There is a problem with GitHub Authentication"})
})

router.get("/auth/github", passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/login/github/failed",
}));

//Google Strategy

router.get("/login/google", passport.authenticate("google", {scope: ["profile"]}));

router.get("/login/google/failed", (req, res, next) => {
    res.status(400).json({message: "There is a problem with Google Authentication"})
});

router.get("/auth/google", passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/local/failed"
}));

module.exports = router;
