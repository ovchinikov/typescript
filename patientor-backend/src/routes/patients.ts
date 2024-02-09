import express from 'express';
import patientsService from '../services/patients';
import { toNewPatient } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  const results = patientsService.getPatients();
  res.send(results);
});

router.post('/', (req, res) => {
  const patient = toNewPatient(req.body);

  try {
    const newPatient = patientsService.addPatient(patient);
    res.json(newPatient);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
});
export default router;
