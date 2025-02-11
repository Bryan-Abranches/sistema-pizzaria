import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";

import { router } from "./router";

const PORT = 4533;
const app = express();
app.use(express.json());
app.use(cors()); // Habilida para qualquer ip possa fazer uma requisição

// Rotas
app.use(router);

// middlewares

app.use("/file", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    // se fro uma instancia do tipo erro
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error ",
  });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

//npm install --save-dev @types/express@4.17.13
