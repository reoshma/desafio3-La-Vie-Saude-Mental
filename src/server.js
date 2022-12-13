const express = require("express");
const routes = require("./routes");
const db = require("./database/connection");

const app = express();

app.use(routes);

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");

  db.hasConnection();
});
