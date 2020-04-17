const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    dob: Date,
    gender: String,
    email: String,
    phoneNo: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

userSchema.methods.getFullName = function getFullName() {
    return this.firstName + " " + this.lastName
}

userSchema.statics.getUserByGender = function getUserByGender(gender, cb) {
    this.find({ gender: gender }, cb)
}

const userModel = mongoose.model('User', userSchema)
userModel.getUserByGender("m", (err, data) => {
    if (!err) console.log(data)
    console.log(err)
})

module.exports = userModel