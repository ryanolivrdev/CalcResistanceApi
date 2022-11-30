import express from 'express';
import cors from './config/cors';
import { apiRouter } from './routes/index';

const app = express();

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
    const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Belem" })
    console.log(`Novo Serviço iniciado - ${date}`)
    console.log(`Disponivel em http://localhost:${PORT}`)
});

app.use(cors);

app.use(express.json());

app.use('/GetResistor', apiRouter)
