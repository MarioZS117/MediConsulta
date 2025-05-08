import axios from 'axios'; // Importar axios para realizar solicitudes HTTP
import mysql from 'mysql2/promise';
import initializeDatabase from '../models/connectionMysql.js'; // Importar la función de inicialización

// Configuración de conexión a la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datos_medicos',
};

export const getPacienteIdByName = async (req, res) => {
  try {
    const { nombre } = req.params;

    if (!nombre) {
      return res.status(400).json({ message: "El nombre del paciente es requerido" });
    }

    // Realizar una solicitud al microservicio de historiales
    const historialUrl = `http://localhost:3001/historiales/paciente/${nombre}`;
    const response = await axios.get(historialUrl);

    // Verificar si el paciente fue encontrado
    if (!response.data || !response.data.datosPaciente) {
      return res.status(404).json({ message: "Paciente no encontrado en el microservicio de historiales" });
    }

    const pacienteId = response.data.datosPaciente._id;

    res.status(200).json({ pacienteId });
  } catch (error) {
    console.error("Error en getPacienteIdByName", error);

    // Manejar errores de conexión o respuesta del microservicio
    if (error.response) {
      return res.status(error.response.status).json({ message: error.response.data.message });
    }

    res.status(500).json({ message: "Error al obtener el ID del paciente", error: error.message });
  }
};

export const addCompleteData = async (req, res) => {
  try {
    const {
      nombrePaciente,
      fecha,
      hora,
      temperatura,
      peso,
      estatura_cm,
      presion_arterial_sistolica,
      presion_arterial_diastolica,
      frecuencia_cardiaca_lpm,
      frecuencia_respiratoria,
      saturacion_de_oxigeno,
      glucosa,
      observaciones_adicionales,
    } = req.body;

    // Validar que el nombre del paciente y los datos requeridos estén presentes
    if (!nombrePaciente) {
      return res.status(400).json({ message: "El nombre del paciente es requerido" });
    }

    if (!fecha || !hora || !temperatura || !peso || !estatura_cm || !presion_arterial_sistolica || !presion_arterial_diastolica || !frecuencia_cardiaca_lpm || !frecuencia_respiratoria || !saturacion_de_oxigeno || !glucosa) {
      return res.status(400).json({ message: "Todos los campos de signos vitales son requeridos" });
    }

    // Obtener el ID del paciente desde el microservicio de historiales
    const historialUrl = `http://localhost:3001/historiales/paciente/${encodeURIComponent(nombrePaciente)}`;
    const response = await axios.get(historialUrl);

    // Verificar si el paciente fue encontrado
    if (!response.data || !response.data.datosPaciente) {
      return res.status(404).json({ message: "Paciente no encontrado en el microservicio de historiales" });
    }

    const pacienteId = response.data.datosPaciente._id;

    // Inicializar la base de datos
    await initializeDatabase();

    // Conectar a la base de datos
    const connection = await mysql.createConnection(dbConfig);

    // Insertar los datos en la tabla "signos_vitales"
    const [result] = await connection.query(
      `INSERT INTO signos_vitales 
      (paciente_id, fecha, hora, temperatura, peso, estatura_cm, presion_arterial_sistolica, presion_arterial_diastolica, frecuencia_cardiaca_lpm, frecuencia_respiratoria, saturacion_de_oxigeno, glucosa, observaciones_adicionales) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        pacienteId,
        fecha,
        hora,
        temperatura,
        peso,
        estatura_cm,
        presion_arterial_sistolica,
        presion_arterial_diastolica,
        frecuencia_cardiaca_lpm,
        frecuencia_respiratoria,
        saturacion_de_oxigeno,
        glucosa,
        observaciones_adicionales || null,
      ]
    );

    await connection.end();
    res.status(201).json({ message: "Datos de signos vitales agregados correctamente", registroId: result.insertId });
  } catch (error) {
    console.error("Error en addCompleteData", error);

    // Manejar errores de conexión o respuesta del microservicio
    if (error.response) {
      return res.status(error.response.status).json({ message: error.response.data.message });
    }

    res.status(500).json({ message: "Error al agregar los datos de signos vitales", error: error.message });
  }
};