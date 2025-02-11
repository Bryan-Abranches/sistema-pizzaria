import { Router } from "express";
import multer from "multer";
// controllers
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListByCategoryController } from "./controllers/products/ListByCategoryController";

// Middleware
import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// rotas user
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

// Rotas Category

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// Rotas Products

router.post(
  "/products",
  isAuthenticated, // Middleware de autenticação
  upload.single("file"), // Middleware do Multer para upload de um único arquivo
  new CreateProductsController().handle // Controlador que processa a requisição
);

router.get(
  "/category/products",
  isAuthenticated,
  new ListByCategoryController().handle
);

export { router };
