const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json')

app.use(cors())

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selected_course = courses.find(course => course._id === id)
  res.send(selected_course)
})

app.listen(port, () => {
  console.log(`learning bee app listening on port ${port}`)
})