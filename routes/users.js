const express = require('express')
const User = require("../models/users")
const Post = require("../models/posts")
const router = express.Router()

router.get('/', async(req, res, next) => {
    try {
        const users = await User.find({})
        return res.json(users)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        return res.json(user)
    } catch (err) {
        throw err
    }

})

router.post('/', async(req, res, next) => {
    const { firstName, lastName, password, dob, gender, email, phoneNo } = req.body
    const user = new User({ firstName, lastName, password, dob, gender, email, phoneNo })
    try {
        const u = await user.save()
        return res.json(u)
    } catch (err) {
        next(err)
    }
})


router.patch('/:id', async(req, res) => {
    const { body: { firstName, lastName, password, dob, gender, email, phoneNo } } = req
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { firstName, lastName, password, dob, gender, email, phoneNo })
        return res.json(user)
    } catch (err) {
        throw err
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        return res.json(user)
    } catch (err) {
        next(err)
    }
})

router.get('/:id/posts', async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const posts = await Post.find({}).where('author').equals(user.id)
        try {
            return res.json(posts)
        } catch (err) {
            throw err
        }
    } catch (err) {
        next(err)
    }
})


module.exports = router