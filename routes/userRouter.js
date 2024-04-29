const express = require("express");
const router = express.Router();

const {createTeacherPlan, createStudentPlan, createMusicianPlan, editTeacherPlan, editStudentPlan, editMusicianPlan, deleteTeacherPlan, deleteStudentPlan, deleteMusicianPlan, editTeacherProfile, editStudentProfile,editMusicianProfile} = require("../controllers/userControllers");

//my account: user landing page

router.get("/", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW User Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
})

router.get("/teacher", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Teacher Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
})

router.get("/musician", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Musician Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
})

router.get("/student", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Student Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
})

// user account settings

router.get("/teacher/account-settings", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Teacher Account Settings"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
})

router.get("/student/account-settings", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Student Account Settings"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
})

router.get("/musician/account-settings", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Musician Account Settings"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
})

// user EDIT profile

router.put("/teacher/edit-profile", editTeacherProfile);
router.put("/student/edit-profile", editStudentProfile);
router.put("/musician/edit-profile", editMusicianProfile);

router.get("/teacher/edit-profile", editTeacherProfile);
router.get("/student/edit-profile", editStudentProfile);
router.get("/musician/edit-profile", editMusicianProfile);

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
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Student Roster"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
});

module.exports = router;