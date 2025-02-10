import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService(); // Instância do serviço

    const user = await createUserService.execute({ name, email, password }); // Chamada ao serviço

    return res.json(user); // Retorna o usuário criado como resposta
  }
}

export { CreateUserController };

/* Duvidas:

Por que o controller é uma classe ?

Por que ele é assincrono 

O que são os dois response 


*/
