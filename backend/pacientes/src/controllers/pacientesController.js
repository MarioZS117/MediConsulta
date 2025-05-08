import { getConnection } from '../models/connectionMongo.js';

// Crear un nuevo paciente
export const createPaciente = async (req, res) => {
  try {
    const {
      nombrePaciente,
      fecha_nacimiento,
      genero,
      ocupacion,
      telefono,
      email,
      direccion,
      contacto_emergencia,
      tipo_sangre,
    } = req.body;

    // Validar que todos los campos estén presentes
    if (
      !nombrePaciente ||
      !fecha_nacimiento ||
      !genero ||
      !ocupacion ||
      !telefono ||
      !email ||
      !direccion ||
      !contacto_emergencia ||
      !tipo_sangre
    ) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const db = await getConnection();
    const result = await db.collection('pacientes').insertOne({
      nombrePaciente,
      fecha_nacimiento,
      genero,
      ocupacion,
      telefono,
      email,
      direccion,
      contacto_emergencia,
      tipo_sangre,
    });

    res.status(201).json({ message: 'Paciente creado correctamente', pacienteId: result.insertedId });
  } catch (error) {
    console.error('Error en createPaciente', error);
    res.status(500).json({ message: 'Error al crear el paciente', error: error.message });
  }
};

// Obtener todos los pacientes
export const getPacientes = async (req, res) => {
  try {
    const db = await getConnection();
    const pacientes = await db.collection('pacientes').find().toArray();

    res.status(200).json(pacientes);
  } catch (error) {
    console.error('Error en getPacientes', error);
    res.status(500).json({ message: 'Error al obtener los pacientes', error: error.message });
  }
};

// Obtener un paciente por ID
export const getPacienteByName = async (req, res) => {
    try {
        const { nombrePaciente } = req.params;

        if (!nombrePaciente) {
            return res.status(400).json({ message: 'El nombre del paciente es requerido' });
        }

        const db = await getConnection();
        const paciente = await db.collection('pacientes').findOne({ nombrePaciente });

        if (!paciente) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }

        res.status(200).json(paciente);
    } catch (error) {
        console.error('Error en getPacienteByName', error);
        res.status(500).json({ message: 'Error al obtener el paciente', error: error.message });
    }
};

// Actualizar un paciente
export const updatePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombrePaciente,
      fecha_nacimiento,
      genero,
      ocupacion,
      telefono,
      email,
      direccion,
      contacto_emergencia,
      tipo_sangre,
    } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'El ID del paciente es requerido' });
    }

    const db = await getConnection();
    const result = await db.collection('pacientes').updateOne(
      { _id: new MongoClient.ObjectId(id) },
      {
        $set: {
          ...(nombrePaciente && { nombrePaciente }),
          ...(fecha_nacimiento && { fecha_nacimiento }),
          ...(genero && { genero }),
          ...(ocupacion && { ocupacion }),
          ...(telefono && { telefono }),
          ...(email && { email }),
          ...(direccion && { direccion }),
          ...(contacto_emergencia && { contacto_emergencia }),
          ...(tipo_sangre && { tipo_sangre }),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    res.status(200).json({ message: 'Paciente actualizado correctamente' });
  } catch (error) {
    console.error('Error en updatePaciente', error);
    res.status(500).json({ message: 'Error al actualizar el paciente', error: error.message });
  }
};

// Eliminar un paciente
export const deletePaciente = async (req, res) => {
    try {
        const { nombrePaciente } = req.params;

        if (!nombrePaciente) {
            return res.status(400).json({ message: 'El nombre del paciente es requerido' });
        }

        const db = await getConnection();
        const result = await db.collection('pacientes').deleteOne({ nombrePaciente });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }

        res.status(200).json({ message: 'Paciente eliminado correctamente' });
    } catch (error) {
        console.error('Error en deletePaciente', error);
        res.status(500).json({ message: 'Error al eliminar el paciente', error: error.message });
    }
};