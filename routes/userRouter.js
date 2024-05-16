const express = require("express");
const router = express.Router();

const {editProfile, getAllTeacherPlans, getAllStudentPlans, getAllMusicianPlans, getPlan, createPlan, editPlan, deletePlan} = require("../controllers/userControllers");

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

router.get("/student", (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to VIEW Student Account Landing Page"}, statusCode: 200,})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while accessing student account details", statusCode: 400}});
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
router.put("/teacher/edit-profile", editProfile);
router.put("/student/edit-profile", editProfile);
router.put("/musician/edit-profile", editProfile);
    //TEST
router.get("/teacher/edit-profile", editProfile);
router.get("/student/edit-profile", editProfile);
router.get("/musician/edit-profile", editProfile);

// PRACTICE PLAN ROUTES
    //VIEW ALL practice plans:
router.get("/teacher/practice-plans", getAllTeacherPlans);
router.get("/student/practice-plans", getAllStudentPlans);
router.get("/musician/practice-plans", getAllMusicianPlans);

    //VIEW ONE practice plan:
router.get("/teacher/:id", getPlan);
router.get("/student/:id", getPlan);
router.get("/musician/:id", getPlan);

// Practice plan Operations
    // CREATE practice plan
    //CRUD
router.post("/teacher/create-plan", createPlan);
router.post("/student/create-plan", createPlan);
router.post("/musician/create-plan", createPlan);
    //TEST
router.get("/teacher/create-plan", createPlan);
router.get("/student/create-plan", createPlan);
router.get("/musician/create-plan", createPlan);

    // EDIT practice plans
    //CRUD
router.put("/teacher/edit-plan", editPlan);
router.put("/student/edit-plan", editPlan);
router.put("/musician/edit-plan", editPlan);
    //TEST
router.get("/teacher/edit-plan", editPlan);
router.get("/student/edit-plan", editPlan);
router.get("/musician/edit-plan", editPlan);

    // DELETE practice plans
    //CRUD
router.delete("/teacher/delete-plan", deletePlan);
router.delete("/student/delete-plan", deletePlan);
router.delete("/musician/delete-plan", deletePlan);
    //TEST
router.get("/teacher/delete-plan", deletePlan)
router.get("/student/delete-plan", deletePlan);
router.get("/musician/delete-plan", deletePlan);

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