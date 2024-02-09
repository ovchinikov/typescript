import patients from '../data/patients';
import { NewPatient, Patient } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Patient[] => {
  return patients;
};

const addPatient = (entry: NewPatient): Patient => {
  const id = uuidv4();
  const newPatient: Patient = {
    id,
    ...entry,
  };
  patients.push(newPatient);
  return newPatient;
};
export default {
  getPatients,
  addPatient,
};
