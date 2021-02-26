import express from 'express'
const app = express()
const PORT = process.env.PORT || '8000'

app.get('/hello/:name', (req, res) => {
  console.log('Log request: ', req.params.name)
  return res.json({
    message: `Hello ${req.params.name}`,
  })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
