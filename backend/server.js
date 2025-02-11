import express from "express";
import dotenv from "dotenv";
import connection from "./Connections/connection.js";
import morgan from "morgan";
import authRoutes from "./Routes/authRoutes.js";
const app = express();
dotenv.config();
connection();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome TO EDGISTIFY",
  });
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log("Server Started");
});
