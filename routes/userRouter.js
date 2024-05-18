const express = require("express");
const router = express.Router();

const {editProfile, getAllTeacherPlans, getAllStudentPlans, getPlan, createPlan, editPlan, deletePlan, getAllStudents} = require("../controllers/userControllers");

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

// user EDIT profile
    //CRUD
router.put("/profile/:id", editProfile); //<<<<<<----FIX
// router.get("/profile/:id", editProfile);



// PRACTICE PLAN ROUTES
    //GET ALL practice plans:
router.get("/teacher-plans/:userId", getAllTeacherPlans);
router.get("/student-plans/:userId", getAllStudentPlans);

    //GET ONE practice plan:
router.get("/plans/:id", getPlan); //<<<<---FIX

// Practice plan Operations
    // CREATE practice plan
    //CRUD
router.post("/plans", createPlan);

    //TEST
router.get("/plans", createPlan);


    // EDIT practice plans
    //CRUD
router.put("/plans/:id", editPlan);

    //TEST
router.get("/plans/:id", editPlan);


    // DELETE practice plans
    //CRUD
router.delete("/plans/:id", deletePlan);


// teacher student roster
//??????????????????????
router.get("/student-roster", getAllStudents);

module.exports = router;