import express from 'express';
import patientsService from '../services/patients';

const router = express.Router();

router.get('/', (_req, res) => {
  const results = patientsService.getPatients();
  res.send(results);
});

router.get('/:id', (req, res) => {
  const patient = patientsService.getPatient(req.params.id);
  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});
/*
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
}); */
export default router;
