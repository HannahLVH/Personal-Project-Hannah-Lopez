//Signup, Login, Logout Controllers
const passport = require("passport");
const bcrypt = require("bcrypt");

const User = require("../model/userModel");

const loginLocalFailed = (req, res, next) => {
    res.status(401).json({error: {message: "Username or password is incorrect"}, statusCode:401});
}

const logoutRequest = (req, res, next) => {
    req.logout((error) => {
        if (error) {
            res.status(400).json({error: {message: "Something went wrong!"}, statusCode: 400});
        };
        res.status(200).json({success: {message: "User logged out!"}, statusCode: 200});
    })
};

const signupRequest = (req, res, next) => {
    const {firstName, lastName, username, role, password} = req.body;
    const strategy = "local";
    console.log("Request received with data:", req.body);
    bcrypt.hash(password, 10, async (error, hashedPassword) => {
        if (error) {
            console.error("Error hashing password:", error);
            return next(error);
        }
        const newUser = new User({
            firstName,
            lastName,
            username,
            role,
            password: hashedPassword,
            strategy
        });
        try {
            await newUser.save()
            req.login(newUser, (error) => {
                if (error) {
                console.error("Error logging in user after signup:", error);
                res.status(400).json({error: {message: "Something went wrong while signing up!"}, statusCode: 400});
                } else {
                    return res.status(200).json({ message: "Signup successful!", statusCode: 200, data: newUser });
                }
            });
        } catch (error) {
            console.error("Error saving new user:", error);
            if (error.code === 11000 && error.keyPattern.username) {
                res.status(400).json({error: {message: "Username already exists"}, statusCode: 400})
            } else {
                res.status(500).json({error: {message: "Internal server error"}, statusCode: 500});
            }
        }
    });
};

module.exports = {loginLocalFailed, logoutRequest, signupRequest};