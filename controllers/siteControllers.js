//Signup, Login, Logout Controllers


const createTeacherAccount = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE Teacher account"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while creating teacher account", statusCode: 400}})
    }
};

const createStudentAccount = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE student account"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while creating student account", statusCode: 400}})
    }
};

const createMusicianAccount = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to CREATE musician account"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while creating musician account", statusCode: 400}})
    }
};

const deleteAccount = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({success: {message: "Route to DELETE Teacher account"}, statusCode: 200})
        }
    } catch (error) {
            res.status(400).json({error: {message: "Something went wrong while deleting teacher account", statusCode: 400}})
    }
    };


module.exports = {createTeacherAccount, createStudentAccount, createMusicianAccount, deleteAccount}