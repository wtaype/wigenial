const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Ruta principal que devuelve texto plano
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // Asegura que el contenido sea texto plano
  res.send('Hola bb, funcionando con servidor');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});