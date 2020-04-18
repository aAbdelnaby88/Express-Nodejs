const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    dob: Date,
    gender: String,
    email: String,
    phoneNo: String
})

userSchema.methods.getFullName = function getFullName() {
    return this.firstName + " " + this.lastName
}

userSchema.statics.getUserByGender = function getUserByGender(gender, cb) {
    this.find({ gender: gender }, cb)
}

//userSchema.pre('save', function(doc, next) {
//    if (doc.isNew) {
//        bcrypt.hash(doc.password, (err, hashedPassword) => {
//            if (!err) {
//                doc.password = hashedPassword
//                next()
//            }
//        })
//    }
//})

const userModel = mongoose.model('User', userSchema)
userModel.getUserByGender("m", (err, data) => {
    if (!err) console.log(data)
    console.log(err)
})

module.exports = userModel