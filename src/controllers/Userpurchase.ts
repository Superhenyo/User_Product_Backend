import { Request, Response } from "express";
import { newOrder, allOrders } from "../services/Userpurchase";

export const handleNewOrder = async (req: Request, res: Response) => {
    try {
        const { userID, productID, quantity, totalPrice } = req.body;
        if (!userID || !productID || !quantity || !totalPrice) {
            res.status(400).json({ message: "Incomplete Data" });
            return;
        }
        await newOrder({ userID, productID, quantity, totalPrice });
        res.status(200).json({ message: "Successful Transaction" });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        res.status(500).json({ message: errorMessage });
        return;
    }
};

export const handleFilteredAllOrders = async (req: Request, res: Response) => {
    try {
        const data = await allOrders();
        res.status(200).json(data)
    } catch (err) {
        console.error("error here", err)
        res.status(500).json({message: 'Unexpected error occur'})
    }
}