import prismaClient from "../../prisma"; // conexão com banco de dados
import { hash } from "bcryptjs"; // criptografia de senha

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //Verificar se o usuario enviou o email

    if (!email) {
      throw new Error("Email incorrect"); // Duvidas a Classe Error e nativa ?
    }

    //Verificar se o email do usuario ja existe no banco de dados

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    // Criptografar a senha

    const passwordHash = await hash(password, 8);

    // cadastrar o usuario

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return { user };
  }
}

export { CreateUserService };
