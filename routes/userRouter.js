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
            res.status(400).json({error: {message: "Something went wrong while accessing account details", statusCode: 400}});
    }
})

router.get("/teacher", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Teacher Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing teacher account details", statusCode: 400}});
    }
})

router.get("/musician", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Musician Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing musician account details", statusCode: 400}});
    }
})

router.get("/student", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Student Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing student account details", statusCode: 400}});
    }
})

// user account settings

router.get("/teacher/account-settings", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Teacher Account Settings"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing teacher account settings", statusCode: 400}});
    }
})

router.get("/student/account-settings", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Student Account Settings"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing student account settings", statusCode: 400}});
    }
})

router.get("/musician/account-settings", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Musician Account Settings"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing musician account settings", statusCode: 400}});
    }
})

// user EDIT profile
    //CRUD
router.put("/teacher/edit-profile", editTeacherProfile);
router.put("/student/edit-profile", editStudentProfile);
router.put("/musician/edit-profile", editMusicianProfile);
    //TEST
router.get("/teacher/edit-profile", editTeacherProfile);
router.get("/student/edit-profile", editStudentProfile);
router.get("/musician/edit-profile", editMusicianProfile);

// user practice plans
    //Routes to VIEW practice plans:
router.get("/teacher/practice-plans", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Teacher Practice Plans"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing teacher practice plans", statusCode: 400}});
    }
})

router.get("/student/practice-plans", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Student Practice Plans"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing student practice plans", statusCode: 400}});
    }
    
})

router.get("/musician/practice-plans", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Musician Practice Plans"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing musician practice plans", statusCode: 400}});
    }
})

// Practice plan Operations
    // CREATE practice plan
    //CRUD
router.post("/teacher/create-plan", createTeacherPlan);
router.post("/student/create-plan", createStudentPlan);
router.post("/musician/create-plan", createMusicianPlan);
    //TEST
router.get("/teacher/create-plan", createTeacherPlan);
router.get("/student/create-plan", createStudentPlan);
router.get("/musician/create-plan", createMusicianPlan);

    // EDIT practice plans
    //CRUD
router.put("/teacher/edit-plan", editTeacherPlan);
router.put("/student/edit-plan", editStudentPlan);
router.put("/musician/edit-plan", editMusicianPlan);
    //TEST
router.get("/teacher/edit-plan", editTeacherPlan);
router.get("/student/edit-plan", editStudentPlan);
router.get("/musician/edit-plan", editMusicianPlan);

    // DELETE practice plans
    //CRUD
router.delete("/teacher/delete-plan", deleteTeacherPlan);
router.delete("/student/delete-plan", deleteStudentPlan);
router.delete("/musician/delete-plan", deleteMusicianPlan);
    //TEST
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
            res.status(400).json({error: {message: "Something went wrong while accessing teacher student roaster", statusCode: 400}});
    }
});

module.exports = router;