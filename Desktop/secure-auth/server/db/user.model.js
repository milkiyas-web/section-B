let mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
let schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
schema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
});
schema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
let user = new mongoose.model('User', schema);
module.exports = user;
