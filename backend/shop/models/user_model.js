const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define user table
const userSchema = new Schema({
    id: {type: mongoose.ObjectId},
    username: {type: String},
    password: {type: String},
    email: {type: String},
    tier: {type: Number},
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;