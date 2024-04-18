const createTeacherAccount = async (req, res, next) => {
try {
    if (200) {
        res.json("Route to create teacher account")
    }
} catch (error) {
        console.log("Error")
}
};

const createStudentAccount = async (req, res, next) => {
    try {
        if (200) {
            res.json("Route to create student account")
        }
    } catch (error) {
            console.log("Error")
    }
    };

const createMusicianAccount = async (req, res, next) => {
try {
    if (200) {
        res.json("Route to create musician account")
    }
} catch (error) {
        console.log("Error")
}
};

const deleteAccount = async (req, res, next) => {
    try {
        if (200) {
            res.json("Route to delete account")
        }
    } catch (error) {
            console.log("Error")
    }
    };


module.exports = {createTeacherAccount, createStudentAccount, createMusicianAccount, deleteAccount}