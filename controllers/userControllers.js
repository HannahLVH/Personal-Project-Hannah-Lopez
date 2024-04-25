//EDIT Profile


//CREATE Practice Plan
const createTeacherPlan = async (req, res, next) => {
    try {
        if (200) {
            res.json("Route to create Teacher practice plan")
        }
    } catch (error) {
            console.log("Error")
    }
}

const createStudentPlan = async (req, res, next) => {
    try {
        if (200) {
            res.json("Route to create Student practice plan")
        }
    } catch (error) {
            console.log("Error")
    }
}

const createMusicianPlan = async (req, res, next) => {
    try {
        if (200) {
            res.json("Route to create Musician practice plan")
        }
    } catch (error) {
            console.log("Error")
    }
}

// EDIT Practice Plan
// DELETE Practice Plan

module.exports = {createTeacherPlan, createStudentPlan, createMusicianPlan}