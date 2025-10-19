const User = require('../models/Users');

// User signup
const signupUser = async(req, res) => {
    const {email, password} = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Username already in use!' });
        }

        // Creates the new user
        user = new User({
            email,
            password,
            transaction_history: [],
            userType: "USER"
        });

        console.log(user)

        await user.save();
        res.status(200).json({ message: 'User signup successfully!' });
    } catch (error) {
        res.status(500).json({message: error});
    }
}

// User login
const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({ message: 'User not found!' });
        }

        if (!(password == user.password)) {
            return res.status(400).json({ message: 'Incorrect password!' });
        }

        // Return user info if login is successful
        res.status(200).json({ message: 'Login successful!', userId: user._id });
    } catch (error) {
        res.status(500).json({message: error});
    }
}

// Get user information
const getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.user_id).select('-password');
        if(!user) {
            return res.status(404).json({message: "User not found!"});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Server Error: 1"});
    }
}

module.exports = {
    getUser,
    signupUser,
    loginUser
}