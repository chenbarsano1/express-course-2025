const express = require('express')
const path = require('path')

const app = express()

// setup static folder - declare one of our folders (public folder)
// to be static - meaning we can just go to the url and it will work
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

app.listen(8000, () => console.log(`Server is running on port 8000`))