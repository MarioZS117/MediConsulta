import express from 'express';
const router = express.Router();
import { createWordDocument,  addPaciente, getResumenHistoriaClinica, getPaciente} from '../controllers/histoController.js';

router.post("/addPaciente",addPaciente)
router.get('/create-word/:pacienteId', createWordDocument);
router.get('/resumen/:pacienteId', getResumenHistoriaClinica);
router.get('/paciente/:nombrePaciente', getPaciente);

export default router;