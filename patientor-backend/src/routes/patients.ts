import express from 'express';
import patientsService from '../services/patients';

const router = express.Router();

router.get('/', (_req, res) => {
  const results = patientsService.getPatients();
  res.send(results);
});

export default router;
