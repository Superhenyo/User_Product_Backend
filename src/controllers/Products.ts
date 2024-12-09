import { Request, Response } from "express";
import { getAllProducts, addNewProduct, updateProduct, deleteProduct, productByCat, getPaginatedProduct } from "../services/Products";

export const handleGetAllProducts = async (req: Request, res: Response) => {
    try {
        const allProductsResult = await getAllProducts();
        res.status(200).json(allProductsResult)
    } catch (err) {
        console.error("Error at controller product", err)
        res.status(500).json({ message: "Unexpected error" })
    }
}

export const handleAddProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price, stock, category_id } = req.body
        if (!name || !price || !stock) {
            res.status(400).json({ message: "Incomplete data" });
            return;
        }
        await addNewProduct({
            name,
            description,
            price,
            stock,
            category_id
        })
        res.status(200).json({ message: "Successfully Added New Product" })
    } catch (error) {
        console.error("Error in controllers", error);
        res.status(500).json({ message: "Unexpected error Occur" })
    }
}

export const handleUpdateProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, name, description, price, stock, category_id } = req.body
        await updateProduct(id, {
            name,
            description,
            price,
            stock,
            category_id,
        })
        res.status(200).json({ message: "Successfully updated products" })
        return
    } catch (err) {
        console.error("Error in controllers", err);
        res.status(500).json({ message: "Unexpected error Occur" })
        return;
    }

}

export const handleDeleteProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.body
        if (!id) {
            res.status(400).json({ message: `The product id ${id} is not found` })
        }
        await deleteProduct(id);
        res.status(200).json({ message: "Successfully deleted products" })
        return
    } catch (err) {
        res.status(500).json({ message: "Unexpected error occur" })
        return;
    }
}

export const handleGetProductsByCat = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: `No product Categroy ${name} been found` })
            return;
        }
        const productByCatData = await productByCat(name)
        res.status(200).json(productByCatData)
        return
    } catch (err) {
        console.error("Error at controller", err)
        res.status(500).json({ message: `Unexpected Error occur` })
    }

}

export const handlePaginatedProducts = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const data = await getPaginatedProduct(page);
        res.status(200).json([data])
        return;
    } catch (err) {
        res.status(500).json({ message: "Unexpected Error occur" })
        return;
    }
}