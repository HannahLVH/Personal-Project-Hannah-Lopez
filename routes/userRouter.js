const express = require("express");
const router = express.Router();

//my account: user landing page

router.get("/", (req, res, next) => {
    res.json("my account: user landing page");
})

router.get("/teacher", (req, res, next) => {
    res.json("my account: teacher landing page");
})

router.get("/musician", (req, res, next) => {
    res.json("my account: musician landing page");
})

router.get("/student", (req, res, next) => {
    res.json("my account: student landing page");
})

// user CREATE plan page


router.get("/teacher/create-plan", (req, res, next) => {
    res.json("route to create practice plan (teacher)");
})

router.get("/student/create-plan", (req, res, next) => {
    res.json("route to create practice plan (student)");
})

router.get("/musician/create-plan", (req, res, next) => {
    res.json("route to create practice plan (musician)");
})

// user account settings

router.get("/teacher/account-settings", (req, res, next) => {
    res.json("route to teacher account settings");
})

router.get("/student/account-settings", (req, res, next) => {
    res.json("route to student account settings");
})

router.get("/musician/account-settings", (req, res, next) => {
    res.json("route to musician account settings");
})

// user EDIT profile

router.get("/teacher/edit-profile", (req, res, next) => {
    res.json("route to teacher edit profile");
})

router.get("/student/edit-profile", (req, res, next) => {
    res.json("route to student edit profile");
})

router.get("/musician/edit-profile", (req, res, next) => {
    res.json("route to musician edit profile");
})

// user practice plans

router.get("/teacher/practice-plans", (req, res, next) => {
    res.json("route to teacher's practice plans'");
})

router.get("/student/practice-plans", (req, res, next) => {
    res.json("route to student's practice plans'");
})

router.get("/musician/practice-plans", (req, res, next) => {
    res.json("route to musician's practice plans'");
})

// CREATE practice plans
// EDIT practice plans
// DELETE practice plans

// teacher student roster

router.get("/teacher/student-roster", (req, res, next) => {
    res.json("route to teacher student roster");
})

module.exports = router;