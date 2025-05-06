import mysql from 'mysql2/promise.js';

async function initializeDatabase() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // Cambia esto por tu usuario de MySQL
        password: '', // Cambia esto por tu contraseña de MySQL
    });

    try {
        console.log('Conexión exitosa a MySQL');

        // Crear la base de datos si no existe
        await connection.query(`CREATE DATABASE IF NOT EXISTS datos_medicos`);
        await connection.query(`USE datos_medicos`);

        // Crear la tabla "signos-vitales" si no existe
        await connection.query(`
            CREATE TABLE IF NOT EXISTS signos_vitales (
                id INT AUTO_INCREMENT PRIMARY KEY,
                paciente_id INT NOT NULL,
                fecha DATE NOT NULL,
                hora TIME NOT NULL,
                temperatura DECIMAL(5, 2) NOT NULL,
                peso DECIMAL(5, 2) NOT NULL,
                estatura_cm INT NOT NULL,
                presion_arterial_sistolica INT NOT NULL,
                presion_arterial_diastolica INT NOT NULL,
                frecuencia_cardiaca_lpm INT NOT NULL,
                frecuencia_respiratoria INT NOT NULL,
                saturacion_de_oxigeno DECIMAL(5, 2) NOT NULL,
                glucosa DECIMAL(5, 2) NOT NULL,
                observaciones_adicionales TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('Base de datos y tabla "signos_vitales" inicializadas correctamente.');
    } catch (err) {
        console.error('Error durante la inicialización de la base de datos:', err);
    } finally {
        await connection.end();
    }
}

// Exportar la función en lugar de ejecutarla directamente
export default initializeDatabase;
