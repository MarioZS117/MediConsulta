import express from 'express';
import dotenv from 'dotenv'; 
import cors from 'cors'; // Mantén solo una importación
import { medicosRoutes } from './routes/index.js';

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods:  ['GET', 'POST', 'PUT', 'DELETE'],
};

dotenv.config(); // Cargar las variables de entorno desde .env

const app = express();
const port = process.env.PORT || 402; // Usar el puerto definido en .env o un valor por defecto

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("productos corriendo " + port);
});

app.use("/medicos", medicosRoutes);

app.listen(port, () => {
    console.log("Mi primer Servicio de Productos!", port);
});