import express from "express";
import {
  handleGetAllProducts,
  handleAddProduct,
  handleUpdateProducts,
  handleDeleteProducts,
  handleGetProductsByCat,
  handlePaginatedProducts,
} from "../controllers/Products";


const ProductRouter = express.Router();

ProductRouter.get("/allProducts", handleGetAllProducts);

ProductRouter.post("/addNewProduct", handleAddProduct);

ProductRouter.put("/updateProduct", handleUpdateProducts);

ProductRouter.delete("/deleteProduct", handleDeleteProducts);

ProductRouter.post("/productByCat", handleGetProductsByCat);

ProductRouter.post("", handlePaginatedProducts);

export default ProductRouter;
