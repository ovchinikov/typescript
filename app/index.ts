import express from 'express'
import calculateBMI from './calculateBMI'
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height)
  const weight = Number(req.query.weight)

  if (isNaN(height) || isNaN(weight)) {
    res.json({ error: 'malformatted parameters' })
  }

  const bmi = calculateBMI(height, weight)
  res.json({
    weight,
    height,
    bmi,
  })
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
