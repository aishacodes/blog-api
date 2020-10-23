import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('We are live!!!')
})

app.listen(3030, () => {
  console.log('App is running on port 3030')
})