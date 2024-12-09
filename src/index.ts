// src/index.ts
import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import { connectToDatabase } from './config/sequelize'


import UserRouter from "./routes/Users"
import ProductRouter from "./routes/Products"
import UserPurchaseRoute from "./routes/Userpurchase";




const app: Express = express();
const port = process.env.PORT || 4000;

connectToDatabase()


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());


app.use("/Users", UserRouter)
app.use("/Products", ProductRouter)
app.use("/Userpurchase", UserPurchaseRoute)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;