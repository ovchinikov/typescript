import patients from '../data/patients';
import { Patient } from '../types';

const getPatients = (): Patient[] => {
  return patients;
};

const getPatient = (id: string): Patient | undefined => {
  const patient = patients.find((p) => p.id === id);
  return patient;
};
/* const addPatient = (entry: NewPatient): Patient => {
  const id = uuidv4();
  const newPatient: Patient = {
    id,
    ...entry,
    ['entries']: [],
  };
  patients.push(newPatient);
  return newPatient;
}; */
export default {
  getPatients,
  getPatient,
};
