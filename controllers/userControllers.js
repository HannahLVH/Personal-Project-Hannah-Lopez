//EDIT Profile


//CREATE Practice Plan
const createTeacherPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE Teacher practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

const createStudentPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE Student practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

const createMusicianPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE Musician practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

// EDIT Practice Plan

const editTeacherPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Teacher practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

const editStudentPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Student practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

const editMusicianPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Musician practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

// DELETE Practice Plan

const deleteTeacherPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to DELETE Teacher practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

const deleteStudentPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to DELETE Student practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

const deleteMusicianPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to DELETE Musician practice plan"}, statusCode: 200,})
        }
    } catch (error) {
            console.log("Error")
    }
}

module.exports = {createTeacherPlan, createStudentPlan, createMusicianPlan, editTeacherPlan, editStudentPlan, editMusicianPlan, deleteTeacherPlan, deleteStudentPlan, deleteMusicianPlan}