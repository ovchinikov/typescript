import express from 'express';
import diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  const results = diaryService.getNonSensitiveEntries();
  res.json(results);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const diary = diaryService.getById(id);
  if (diary) {
    res.json(diary);
  } else {
    res.status(404).send('Diary not found');
  }
});

router.post('/', (req, res) => {
  const newDiaryEntry = toNewDiaryEntry(req.body);
  const addedEntry = diaryService.addDiary(newDiaryEntry);
  res.json(addedEntry);
});

export default router;
