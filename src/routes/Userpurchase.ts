import express from "express"
import { handleFilteredAllOrders, handleNewOrder } from "../controllers/Userpurchase"


const UserPurchaseRoute = express.Router();

UserPurchaseRoute.post("/new", handleNewOrder);

UserPurchaseRoute.get("/all", handleFilteredAllOrders)

export default UserPurchaseRoute;