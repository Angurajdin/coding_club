const User = require('../models/user')

module.exports = class API{


    static async login(req, res) {
        console.log("Api Called")
        try {
            let currentUser = await User.find({ emailID: req.body.email })
            if (currentUser !== []) {
                if (currentUser[0].password === req.body.password) {

                    console.log("Password match")
                    return res.status(200).json({ currentUser: currentUser, message: "successfully"});
                }
                else {
                    console.log("password mismatch")
                    return res.status(400).json({message: "Invalid EmailID or Password"})
                }
            }
            else {
                console.log("Email mismatch")
                return res.status(400).json({message: "Invalid EmailID or Password"})
            }
        } catch (error) {
            return res.status(400).json({message: "Invalid EmailID or Password"})
        }
    }

    static async signup(req, res) {
        try {
            await User.create(req.body);
            res.status(200).json({message: "successfully"});
        } catch (err) {
            res.status(400).json({message: "error on inserting", error: err.message});
        }
    }

}