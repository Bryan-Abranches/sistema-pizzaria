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
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";

import { FinishOrderController } from "./controllers/order/FinishOrderController";

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

// Rotas Order
router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

router.post("/order/add", isAuthenticated, new AddItemController().handle);

router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);

router.put("/order/send", isAuthenticated, new SendOrderController().handle);

router.get("/orders", isAuthenticated, new ListOrderController().handle);

router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);

export { router };
