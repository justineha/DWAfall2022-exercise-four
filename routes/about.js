const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the about page route
router.get('/', (req, res) => {
    res.send('<div><h1>About Page</h1><h2>This page is about...</h2></div>')
  })

router.get('/me', (req, res) => {
    res.send([
        {
            "id": "Me",
            "name": "Justine",
            "message": "Hello"
        },
        {
            "id": "Not me",
            "name": "Someone else",
            "message": "Bye"
        },
    ]) // relative path --> nesting, from app.js (about) then here 
})

module.exports = router;