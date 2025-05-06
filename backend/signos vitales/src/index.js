import express, { Router } from 'express';
import { signosRoutes } from './routes/index.js';
import cors from 'cors';
import initializeDatabase from './models/connectionMysql.js';

const app = express();
const port = process.env.PORT || 405;
app.use(express.json());

initializeDatabase();

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));
app.get("/",(req,res)=>{
    res.send("productos corriendo " + port);
});

app.use("/signos-vitales",signosRoutes
);

app.listen(port,()=>{
  console.log("Mi primer Servicio de Productos!",port);
});