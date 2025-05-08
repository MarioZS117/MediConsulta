import express from 'express';
const router = express.Router();
import { addCompleteData,
    getPacienteIdByName
 } from '../controllers/signosControllers.js';

router.get('/paciente/:nombre', getPacienteIdByName);
router.post('/registro', addCompleteData);

export default router;