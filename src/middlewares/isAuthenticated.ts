import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Receber o token para verificação

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // Validação do Token

    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    // Recuperar o id do token e colocar dentro de uma variavel user_id dentro do Request
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
