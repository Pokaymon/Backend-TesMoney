const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Servidor Node.js con Express en EC2 Con Sub-dominio y Certificado SSL");
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
