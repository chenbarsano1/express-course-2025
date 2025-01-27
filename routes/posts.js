import express from 'express'
const router = express.Router()

let posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
    {id: 3, title: 'Post 3'}
]

// get all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.json(posts.slice(0, limit))
    }
    res.json(posts)
})

// get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if (!post) {
        return res.status(404).json({msg: `A post with the id of ${id} was not found`})
    }
    res.status(200).json(post)
    // res.json(posts.filter((post) => post.id === id))
})

// create new post
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
        return res.status(400).json({msg: 'please include a title'})
    }
    posts.push(newPost)
    res.status(201).json(posts)
})

// update post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        return res.status(404).json({msg: `A post with the id of ${id} was not found`})
    }
    post.title = req.body.title
    res.status(200).json(posts)
})

// delete post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        return res.status(404).json({msg: `A post with the id of ${id} was not found`})
    }
    posts = posts.filter((post) => post.id != id)
    res.status(200).json(posts)
})

export default router