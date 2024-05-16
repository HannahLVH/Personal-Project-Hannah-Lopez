const User = require("../model/userModel");
const Plan = require("../model/planModel");

//EDIT Profile
const editProfile = async (req, res, next) => {
        const {id} = req.params;
        const {firstName, lastName, username} = req.body;
    try {
        await User.findByIdAndUpdate(
            id,
            {$set: {
                firstName,
                lastName,
                username
            }},
            {new: true}
        )
        res.status(201).json({success: {message: "Your profile is updated", data: newUser, statusCode: 201}})
        
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing your profile", statusCode: 400}})
    }
}
//should I create one for each type of user?
/*
const editStudentProfile = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Student profile"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing student profile", statusCode: 400}})
    }
}

const editMusicianProfile = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Musician profile"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing musician profile", statusCode: 400}})
    }
}
*/

//GET ALL Plans
const getAllTeacherPlans = async (req, res, next) => {
    try {
        if (200) {
            await Plan.find({}).then((plans) =>
            res.status(200).json({success: {message: "Route to VIEW Teacher Practice Plans"}, data: plans, statusCode: 200}))
        }
    } catch (error) {
        res.status(400).json({error: {message: "Something went wrong while accessing teacher practice plans", data: plans, statusCode: 400}});
    }
};

const getAllStudentPlans = async (req, res, next) => {
    try {
        if (200) {
            await Plan.find({}).then((plans) =>
            res.status(200).json({success: {message: "Route to VIEW student Practice Plans", data: plans, statusCode: 200}}))
        }
    } catch (error) {
        res.status(400).json({error: {message: "Something went wrong while accessing student practice plans", data: plans, statusCode: 400}});
    }
};

const getAllMusicianPlans = async (req, res, next) => {
    try {
        if (200) {
            await Plan.find({}).then((plans) =>
            res.status(200).json({success: {message: "Route to VIEW musician Practice Plans", data: plans, statusCode: 200}}))
        }
    } catch (error) {
        res.status(400).json({error: {message: "Something went wrong while accessing musician practice plans", data: plans, statusCode: 400}});
    }
};

//GET ONE Plan
const getPlan = async (req, res, next) => {
    const {id} =req.params;
    try{
        if (200) {
            await Plan.findOne({_id: id}).then((plans) => {
                res.status(200).json({success: {message: "Success! Found he plan you were looking for", data: plans, statusCode:200}})
            })
        }
    } catch (error) {
        res.status(400).json({error: {message: "Error! Something went wrong retrieving the plan!", statusCode: 400}})
    }
};

//CREATE Practice Plan
const createPlan = async (req, res, next) => {

    const {activity1, practiceNotes1, activity2, practiceNotes2, activity3, practiceNotes3} =req.body;

    const newPlan = new Plan({
        activity1: activity1,
        practiceNotes1: practiceNotes1,
        activity2: activity2,
        practiceNotes2: practiceNotes2,
        activity3: activity3,
        practiceNotes3: practiceNotes3
    })

    try {
        await newPlan.save();
        res.status(200).json({success: {message: "Route to CREATE Teacher practice plan", data: newPlan, statusCode: 200}})
    } catch (error) {
        res.status(400).json({error: {message: "Something went wrong while creating practice plan", statusCode: 400}})
    }
}

//should I create one for each type of user?
/*
const createStudentPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE Student practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while creating student practice plan", statusCode: 400}})
    }
}

const createMusicianPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE Musician practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while creating musician practice plan", statusCode: 400}})
    }
}
*/

// EDIT Practice Plan

const editPlan = async (req, res, next) => {
    const {id} = req.params;
    const {activity1, practiceNotes1, activity2, practiceNotes2, activity3, practiceNotes3} =req.body;

    try {
        await Plan.findByIdAndDelete(
            id,
            {$set: {
                activity1,
                practiceNotes1,
                activity2,
                practiceNotes2,
                activity3,
                practiceNotes3
            }},
            {new: true}
        )
            res.status(201).json({success: {message: "Book is updated", data: newBook, statusCode: 201}})
        
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing teacher practice plan", statusCode: 400}})
    }
}
//should I create one for each type of user?
/*
const editStudentPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Student practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing student practice plan", statusCode: 400}})
    }
}

const editMusicianPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Musician practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing musician practice plan", statusCode: 400}})
    }
}
*/

// DELETE Practice Plan

const deletePlan = async (req, res, next) => {
    const {id} = req.params;

    try {
        await Plan.findByIdAndDelete(id);
        res.status(200).json({success: {message: "The practice plan was deleted successfully", statusCode: 200}})    
    } catch (error) {
        res.status(400).json({error: {message: "Something went wrong while deleting the practice plan", statusCode: 400}})
    }
};

//should I create one for each type of user?
/*
const deleteStudentPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to DELETE Student practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while deleting student practice plan", statusCode: 400}})
    }
}
const deleteMusicianPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to DELETE Musician practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while deleting musician practice plan", statusCode: 400}})
    }
}
*/

module.exports = {editProfile, getAllTeacherPlans, getAllStudentPlans, getAllMusicianPlans, getPlan, createPlan, editPlan, deletePlan}