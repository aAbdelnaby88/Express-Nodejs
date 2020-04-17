const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
})

postSchema.methods.getPostDetails = function getPostDetails() {
    return this.title + " " + this.body
}

const postModel = mongoose.model('Post', postSchema)

module.exports = postModel