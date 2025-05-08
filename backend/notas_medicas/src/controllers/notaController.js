import axios from "axios";
import { getConnection } from "../models/connectionMongo.js"; 
export const getPacienteIdByName = async (req, res) => {
  try {
    const { nombre } = req.params;

    if (!nombre) {
      return res.status(400).json({ message: "El nombre del paciente es requerido" });
    }

    const database = await getConnection();

    // Buscar el paciente por nombre en la colección 'pacientes'
    const paciente = await database.collection('pacientes').findOne({ "nombrePaciente":nombre });

    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    res.status(200).json({ pacienteId: paciente._id });
  } catch (error) {
    console.error("Error en getPacienteIdByName", error);
    res.status(500).json({ message: "Error al obtener el ID del paciente", error: error.message });
  }
};

export const addCompleteData = async (req, res) => {
  try {
    const { 
      nombrePaciente, 
      fechaLugar, 
      motivoConsulta, 
      examenFisico, 
      diagnostico, 
      tratamiento, 
      recomendaciones 
    } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!nombrePaciente || !fechaLugar || !motivoConsulta || !examenFisico || !diagnostico || !tratamiento || !recomendaciones) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Realizar una solicitud al microservicio de pacientes
    const pacientesUrl = "http://localhost:406/pacientes/";
    let pacientes;

    try {
      const response = await axios.get(pacientesUrl);
      pacientes = response.data;
    } catch (error) {
      console.error("Error al obtener los pacientes del microservicio:", error);
      return res.status(500).json({ message: "Error al comunicarse con el microservicio de pacientes" });
    }

    // Verificar si el nombre del paciente existe en la lista de pacientes
    const pacienteExiste = pacientes.some((paciente) => paciente.nombrePaciente === nombrePaciente);

    if (!pacienteExiste) {
      return res.status(404).json({ message: "Paciente no encontrado en el microservicio de pacientes" });
    }

    // Crear el objeto de la nota médica
    const notaCompleta = {
      nombrePaciente, // Usar el nombre del paciente como referencia
      fechaLugar,
      motivoConsulta,
      examenFisico,
      diagnostico,
      tratamiento,
      recomendaciones,
      fechaCreacion: new Date() // Marca de tiempo
    };

    // Conectar a la base de datos
    const database = await getConnection();

    // Insertar el documento en la colección 'notas-medicas'
    const result = await database.collection('notas-medicas').insertOne(notaCompleta);

    res.status(201).json({ message: "Nota médica agregada correctamente", notaId: result.insertedId });
  } catch (error) {
    console.error("Error en addCompleteData", error);
    res.status(500).json({ message: "Error al agregar la nota médica", error: error.message });
  }
};