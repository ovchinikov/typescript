import express from 'express';
import calculateBMI from './calculateBMI';
import calculator from './calculator';
import { operation } from './calculator';
import calculateExercises from './exerciseCalculator';
import { exerciseValues } from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    res.json({ error: 'malformatted parameters' });
  }

  const bmi = calculateBMI(height, weight);
  res.json({
    weight,
    height,
    bmi,
  });
});

app.post('/calculator', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if (!value1 || isNaN(Number(value1))) {
    return res
      .status(400)
      .send({ error: 'value1 is required and cannot be empty' });
  }
  if (!value2 || isNaN(Number(value2))) {
    return res
      .status(400)
      .send({ error: 'value2 is required and cannot be empty' });
  }
  if (!op) {
    return res.status(400).send({ error: 'Op is required' });
  }

  const Operation = op as operation;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const results = calculator(Number(value1), Number(value2), Operation);
  console.log(results);
  return res.send({ results });
});

app.post('/exercises', (req, res) => {
  try {
    const exerciseValues = req.body as exerciseValues;
    res.json(calculateExercises(exerciseValues));
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error) {
      errorMessage += error.message;
      console.error(errorMessage);
    }
    res.status(400).json({ error: errorMessage });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
