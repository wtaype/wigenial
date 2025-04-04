const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html'); // Asegura que el contenido sea HTML
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Wigenial</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
        }
      </style>
      <script>
        async function fetchMessage() {
          try {
            const response = await fetch('https://wigenial.vercel.app/');
            const message = await response.text();
            document.getElementById('server-message').innerText = message;
          } catch (error) {
            document.getElementById('server-message').innerText = 'Error al conectar con el servidor.';
          }
        }
        window.onload = fetchMessage;
      </script>
    </head>
    <body>
      <h1>Hola bb, funcionando con Vercel</h1>
      <p id="server-message">Cargando mensaje del servidor...</p>
    </body>
    </html>
  `); // Envía el contenido HTML actualizado
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});