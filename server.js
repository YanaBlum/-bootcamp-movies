const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

const URL = `http://www.omdbapi.com/?apikey=a2e2ca53&s=`

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, res) {
  res.send(`OK`)
})

app.get('/movies/:title', function (req, res) {
  let title = req.params.title
  let movies
  urllib.request(`${URL}${title}`, function (err, response) {
    movies = JSON.parse(response.toString()).Search
      .map(m => {
        return {
          title: m.Title,
          year: m.Year,
          img: m.Poster,
          movieId: m.imdbID
        }
      })
    res.send(movies)
  })
})

const port = 8080
app.listen(port, function () {
  console.log(`Server is runing on port ${port}`);
})