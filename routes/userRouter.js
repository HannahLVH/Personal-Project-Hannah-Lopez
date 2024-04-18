const express = require("express");
const router = express.Router();

//my account: user landing page

router.get("/user", (req, res, next) => {
    res.json("my account: user landing page");
})

router.get("/user/teacher", (req, res, next) => {
    res.json("my account: teacher landing page");
})

router.get("/user/musician", (req, res, next) => {
    res.json("my account: musician landing page");
})

router.get("/user/student", (req, res, next) => {
    res.json("my account: student landing page");
})

// user create plan page

router.get("/user/teacher/create-plan", (req, res, next) => {
    res.json("route to create practice plan (teacher)");
})

router.get("/user/student/create-plan", (req, res, next) => {
    res.json("route to create practice plan (student)");
})

router.get("/user/musician/create-plan", (req, res, next) => {
    res.json("route to create practice plan (musician)");
})

// user account settings

router.get("/user/teacher/account-settings", (req, res, next) => {
    res.json("route to teacher account settings");
})

router.get("/user/student/account-settings", (req, res, next) => {
    res.json("route to student account settings");
})

router.get("/user/musician/account-settings", (req, res, next) => {
    res.json("route to musician account settings");
})

// user edit profile

router.get("/user/teacher/edit-profile", (req, res, next) => {
    res.json("route to teacher edit profile");
})

router.get("/user/student/edit-profile", (req, res, next) => {
    res.json("route to student edit profile");
})

router.get("/user/musician/edit-profile", (req, res, next) => {
    res.json("route to musician edit profile");
})

// user practice plans

router.get("/user/teacher/practice-plans", (req, res, next) => {
    res.json("route to teacher's practice plans'");
})

router.get("/user/student/practice-plans", (req, res, next) => {
    res.json("route to student's practice plans'");
})

router.get("/user/musician/practice-plans", (req, res, next) => {
    res.json("route to musician's practice plans'");
})

// teacher student roster

router.get("/user/teacher/student-roster", (req, res, next) => {
    res.json("route to teacher student roster");
})

module.exports = router;