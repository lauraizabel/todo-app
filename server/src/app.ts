import express from "express";
import cors from "cors";
import "dotenv/config";
import { createConnection } from "typeorm";
import config from "./database/config";
import publicRoutes from "./routes/publicRoutes";
const app = express();

app.use(cors());
app.use(express.json({}));

app.options("/", cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use(publicRoutes);

const PORT = process.env.PORT || 3080;

createConnection(config)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect db", err);
    process.exit(1);
  });
