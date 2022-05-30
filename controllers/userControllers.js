const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("please Enter all the fields");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,

        });
    } else {
        res.status(400);
        throw new Error("Failed to create user")
    }

});

// const authUser = asyncHandler(async (req, res) => {
//     console.log(req.body);
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     // if (user && (await user.matchPassword(password))) {
//     //     res.json({
//     //         _id: user._id,
//     //     })
//     // }

// })

module.exports = { registerUser };