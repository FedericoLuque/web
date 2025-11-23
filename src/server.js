import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const rutaPublic = path.join(__dirname, '../public');

app.use(express.static(rutaPublic));

console.log("Carpeta estática registrada:", rutaPublic);

app.get('/saludo', (req, res) => {
    res.send('Hola desde el servidor Express');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

app.use((req, res) => {
    res.status(404).send('Error 404: página no encontrada');
});