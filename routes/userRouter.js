const express = require("express");
const router = express.Router();

const {createTeacherPlan, createStudentPlan, createMusicianPlan, editTeacherPlan, editStudentPlan, editMusicianPlan, deleteTeacherPlan, deleteStudentPlan, deleteMusicianPlan} = require("../controllers/userControllers");

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

// Practice plan Operations
    // CREATE practice plan

router.post("/teacher/create-plan", createTeacherPlan);
router.post("/student/create-plan", createStudentPlan);
router.post("/musician/create-plan", createMusicianPlan);

router.get("/teacher/create-plan", createTeacherPlan);
router.get("/student/create-plan", createStudentPlan);
router.get("/musician/create-plan", createMusicianPlan);

    // EDIT practice plans

router.put("/teacher/edit-plan", editTeacherPlan);
router.put("/student/edit-plan", editStudentPlan);
router.put("/musician/edit-plan", editMusicianPlan);

router.get("/teacher/edit-plan", editTeacherPlan);
router.get("/student/edit-plan", editStudentPlan);
router.get("/musician/edit-plan", editMusicianPlan);

    // DELETE practice plans

router.delete("/teacher/delete-plan", deleteTeacherPlan);
router.delete("/student/delete-plan", deleteStudentPlan);
router.delete("/musician/delete-plan", deleteMusicianPlan);

router.get("/teacher/delete-plan", deleteTeacherPlan);
router.get("/student/delete-plan", deleteStudentPlan);
router.get("/musician/delete-plan", deleteMusicianPlan);

// teacher student roster

router.get("/teacher/student-roster", (req, res, next) => {
    res.json("route to teacher student roster");
})

module.exports = router;