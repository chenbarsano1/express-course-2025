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

export default router