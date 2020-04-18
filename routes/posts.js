const express = require('express')
const Post = require("../models/posts")
const router = express.Router()


router.get('/', async(req, res, next) => {
    try {
        const posts = await Post.find({}).populate('author')
        return res.json(posts)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author')
        return res.json(post)
    } catch (err) {
        throw err
    }
})

router.post('/', async(req, res, next) => {
    const { body: { title, body, author } } = req
    try {
        const post = await Post.create({ title, body, author })
        return res.json(post)
    } catch (err) {
        next(err)
    }
})

router.patch('/:id', async(req, res) => {
    const { body: { title, body, author } } = req
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { title, body, author })
        return res.json(post)
    } catch (err) { throw err }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id)
        return res.json(post)
    } catch (err) {
        next(err)
    }
})

module.exports = router