import express from 'express';
import patientsRouter from './routes/patients';
import diagnosesRouter from './routes/diagnoses';

const app = express();

app.use(express.json());
app.use(express.static('dist'));

app.use('/api/patients', patientsRouter);
app.use('/api/diagnoses', diagnosesRouter);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
