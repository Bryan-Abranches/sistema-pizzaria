import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryService = new CreateCategoryService();
    console.log("Recebendo dados:", req.body); // 📌 Verifica o que está chegando no backend

    const { name } = req.body;

    const category = await createCategoryService.execute({ name });

    return res.json(category);
  }
}

export { CreateCategoryController };
