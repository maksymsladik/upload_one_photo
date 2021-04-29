const express = require("express");
require("dotenv").config();
const { sequelize } = require("./db");

const app = express();

app.use(require("cors")({ origin: "http://localhost:3000/" }));
app.use(express.json());
app.use("/api", require("./routes/index"));

const PORT = process.env.PORT || 3001;

const connect = async () => {
  try {
    await sequelize.authenticate();
    /* await sequelize.sync({ force: true }); */
    app.listen(PORT, () => console.log(`Listen: ${PORT}`));
  } catch (e) {
    console.log("Error:", e);
  }
};

connect();
