const express = require('express')
const User = require("../models/users")
const router = express.Router()

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (!err) return res.json(users)
        console.log(err)
    })
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (!err) return res.json(user)
        console.log(err)
    })
})

router.post('/', (req, res) => {
    const { body: { firstName, lastName, password, dob, gender, email, phoneNo } } = req
    User.create({ firstName, lastName, password, dob, gender, email, phoneNo }, (err, user) => {
        if (!err) return res.json(user)
        console.log(err)
    })
})

router.patch('/:id', (req, res) => {
    const { body: { firstName, lastName, password, dob, gender, email, phoneNo } } = req
    User.findByIdAndUpdate(req.params.id, { firstName, lastName, password, dob, gender, email, phoneNo }, (err, user) => {
        if (!err) return res.json(user)
        console.log(err)
    })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (!err) return res.json(user)
        console.log(err)
    })
})

module.exports = router