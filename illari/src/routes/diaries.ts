import express from 'express';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
  const results = diaryService.getNonSensitiveEntries();
  res.json(results);
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;
