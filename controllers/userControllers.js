//EDIT Profile
const editTeacherProfile = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Teacher profile"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing teacher profile", statusCode: 400}})
    }
}

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

//CREATE Practice Plan
const createTeacherPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE Teacher practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while creating teacher practice plan", statusCode: 400}})
    }
}

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

// EDIT Practice Plan

const editTeacherPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to EDIT Teacher practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while editing teacher practice plan", statusCode: 400}})
    }
}

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

// DELETE Practice Plan

const deleteTeacherPlan = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to DELETE Teacher practice plan"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while deleting teacher practice plan", statusCode: 400}})
    }
}

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

module.exports = {createTeacherPlan, createStudentPlan, createMusicianPlan, editTeacherPlan, editStudentPlan, editMusicianPlan, deleteTeacherPlan, deleteStudentPlan, deleteMusicianPlan, editTeacherProfile, editStudentProfile, editMusicianProfile}