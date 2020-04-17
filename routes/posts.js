const express = require('express')
const Post = require("../models/posts")
const router = express.Router()


router.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        if (!err) return res.json(posts)
        console.log(err)
    })
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (!err) return res.json(post)
        console.log(err)
    })
})

router.post('/', (req, res) => {
    const { body: { title, body } } = req
    Post.create({ title, body }, (err, post) => {
        if (!err) return res.json(post)
        console.log(err)
    })
})

router.patch('/:id', (req, res) => {
    const { body: { title, body } } = req
    Post.findByIdAndUpdate(req.params.id, { title, body }, (err, post) => {
        if (!err) return res.json(post)
        console.log(err)
    })
})

router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, post) => {
        if (!err) return res.json(post)
        console.log(err)
    })
})

module.exports = router