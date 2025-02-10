import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products/CreateProductsService";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { name, price, description, banner, category_id } = req.body;

    const creteProductsService = new CreateProductsService();

    const products = await creteProductsService.execute({
      name,
      price,
      description,
      banner,
      category_id,
    });

    return res.json(products);
  }
}

export { CreateProductsController };
