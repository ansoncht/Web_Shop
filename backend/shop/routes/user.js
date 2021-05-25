const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const users = require("../models/user_model");

const saltRounds = 10;

router.post("/register", (req, res) => {
    const {
        email,
        username,
        password,
    } = req.body;
    console.log("===================Body===================");
    console.log(req.body);
    users
        .find({$or: [{ email: email }, { username: username }]})
        .exec()
        .then((user) => {
            if (user.length >= 1) {
                let result;
                if (user[0].email === email)
                    result = "Email already Registered";
                else
                    result = "Username already Registered";
                res.send({success: false, result: result});
            } else {
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) {
                        res.send( {success: false, result: err});
                    } else {
                        const user = new users({
                            email: email,
                            password: hash,
                            username: username,
                        });
                        user
                            .save()
                            .then((result) => {
                                console.log(result);
                                res.send({success: true, result: "User Created"});
                            })
                            .catch((err) => {
                                console.log(err);
                                res.send({success: false, result: err});
                            });
                    }
                });
            }
        })
        .catch((err) => {
            res.send({success: false, result: err});
        });
});

module.exports = router;