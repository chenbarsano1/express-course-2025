let posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
    {id: 3, title: 'Post 3'}
]

// @desc    get all posts
// @route   GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.json(posts.slice(0, limit))
    }
    res.json(posts)
}

// @desc    get signle post
// @route   GET /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`)
        error.status = 404
        return next(error)
    }
    res.status(200).json(post)
    // res.json(posts.filter((post) => post.id === id))
}

// @desc    create new post
// @route   POST /api/posts
export const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
        const error = new Error(`please include a title`)
        error.status = 400
        return next(error)
    }
    posts.push(newPost)
    res.status(201).json(posts)
}

// @desc    update post
// @route   PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`)
        error.status = 404
        return next(error)
    }
    post.title = req.body.title
    res.status(200).json(posts)
}

// @desc    delete post
// @route   DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`)
        error.status = 404
        return next(error)
    }
    posts = posts.filter((post) => post.id != id)
    res.status(200).json(posts)
}