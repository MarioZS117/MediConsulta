import express, { Router } from 'express';
import {histoRoutes} from './routes/index.js';

import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));


app.get("/",(req,res)=>{
    res.send("productos corriendo " + port);
});

app.use("/historiales",histoRoutes
);

app.listen(port,()=>{
  console.log("Mi primer Servicio de Productos!",port);
});