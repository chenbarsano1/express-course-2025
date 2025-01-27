import express from 'express'
import path from 'path'
import posts from './routes/posts.js'
const port = process.env.PORT || 8000

const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// setup static folder - declare one of our folders (public folder)
// to be static - meaning we can just go to the url and it will work
// app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/posts', posts)


app.listen(port, () => console.log(`Server is running on port ${port}`))