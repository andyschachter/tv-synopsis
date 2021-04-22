const express = require('express')
const shows = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { shows })
})

app.get('/season/:id', (request, response) => {
  const season = shows.find((season) => season.number === parseInt(request.params.id))

  return response.render('season', { season })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1340, () => {
  console.log('Listening on 1340...') // eslint-disable-line no-console
})