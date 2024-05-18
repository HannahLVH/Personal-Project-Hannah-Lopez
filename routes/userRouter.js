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

// user EDIT profile - WORKS
    //CRUD
router.put("/profile/:id", editProfile);
router.get("/profile/:id", editProfile);

// STUDENT-ROSTER - WORKS
    //GET ALL STUDENTS
    router.get("/student-roster", getAllStudents);

// PRACTICE PLAN ROUTES
    //GET ALL practice plans: BOTH WORK
router.get("/teacher-plans/:userId", getAllTeacherPlans);
router.get("/student-plans/:userId", getAllStudentPlans);

    //GET ONE practice plan: WORKS
router.get("/plans/:id", getPlan); 

// Practice plan Operations
    // CREATE practice plan
    //CRUD
router.post("/create-plan", createPlan);
    //TEST
router.get("/create-plan", createPlan);


    // EDIT practice plans
    //CRUD
router.put("/edit-plan/:id", editPlan);
    //TEST
router.get("/edit-plan/:id", editPlan);


    // DELETE practice plans
    //CRUD
router.delete("/delete-plan/:id", deletePlan);
router.get("/delete-plan/:id", deletePlan);




module.exports = router;