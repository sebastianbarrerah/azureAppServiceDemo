
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola, mundo! Esta es una app con Express.");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

