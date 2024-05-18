//Signup, Login, Logout Controllers
const passport = require("passport");
const bcrypt = require("bcrypt");

const loginLocalFailed = (req, res, next) => {
    res.status(401).json({error: {message: "Username or password is incorrect"}, statusCode:401});
}

const logoutRequest = (req, res, next) => {
    req.logout((error) => {
        if (error) {
            res.status(400).json({error: {message: "Something went wrong!", statusCode: 400}});
        };
        res.status(200).json({success: {message: "User logged out!", statusCode: 200}});
    })
};

const signupRequest = (req, res, next) => {
    const {firstName, lastName, username, password} = req.body;
    bcrypt.hash(password, 10, async (error, hashedPassword) => {
        if (err) {
            return next(error);
        }
        const newUser = new User({
            firstName,
            lastName,
            username,
            role,
            password: hashedPassword,
        });
        try {
            await newUser.save()
            req.login(newUser, (err) => {
                if (err) {
                res.status(400).json({error: {message: "Something went wrong while signing up!", statusCode: 400}});
                }
            })
        } catch (error) {
            if (error === 11000 && err.keyPattern.username){
                res.status(400).json({error: {message: "Username already exists", statusCode: 400}})
            } else {
                res.status(500).json({error: {message: "Internal server error", statusCode: 500}});
            }
        }
    });
};



// const createTeacherAccount = async (req, res, next) => {
//     try {
//         if (200) {
//             res.status(200).json({success: {message: "Route to CREATE Teacher account"}, statusCode: 200})
//         }
//     } catch (error) {
//             res.status(400).json({error: {message: "Something went wrong while creating teacher account", statusCode: 400}})
//     }
// };

// const createStudentAccount = async (req, res, next) => {
//     try {
//         if (200) {
//             res.status(200).json({success: {message: "Route to CREATE student account"}, statusCode: 200})
//         }
//     } catch (error) {
//             res.status(400).json({error: {message: "Something went wrong while creating student account", statusCode: 400}})
//     }
// };

// const createMusicianAccount = async (req, res, next) => {
//     try {
//         if (200) {
//             res.status(200).json({success: {message: "Route to CREATE musician account"}, statusCode: 200})
//         }
//     } catch (error) {
//             res.status(400).json({error: {message: "Something went wrong while creating musician account", statusCode: 400}})
//     }
// };

// const deleteAccount = async (req, res, next) => {
//     try {
//         if (200) {
//             res.status(200).json({success: {message: "Route to DELETE Teacher account"}, statusCode: 200})
//         }
//     } catch (error) {
//             res.status(400).json({error: {message: "Something went wrong while deleting teacher account", statusCode: 400}})
//     }
//     };


module.exports = {loginLocalFailed, logoutRequest, signupRequest};