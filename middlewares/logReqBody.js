function logRequestBody(res, req, next) {
    console.log("Request Body", req.body)
    next()
}

module.exports = logRequestBody