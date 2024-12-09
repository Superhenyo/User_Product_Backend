import Products from "../models/Products";
import Product_Cat from "../models/ProductsCategory";

export const getAllProducts = async () => {
    try {
        const allProducts = Products.findAll();
        return allProducts;
    } catch (err) {
        console.log("error at services products", err)
        throw new Error("Unexpected Error occur")
    }
}

export const addNewProduct = async (product: {
    name: string,
    description: string,
    price: number,
    stock: number,
    category_id: number
}) => {
    try {
        const newProduct = new Products(product)
        await newProduct.save()
    } catch (error) {
        console.error("error at service addNewProduct", error)
        throw error
    }
}

export const updateProduct = async (productID: number, productUpdate: {
    name?: string,
    description?: string,
    price?: number,
    stock?: number,
    category_id?: number,
}): Promise<void> => {
    try {
        const productRecord = await Products.findOne({ where: { productID } })
        console.log("hellow", productRecord?.name)
        if (!productRecord) {
            throw new Error(`The product ${productID} is not found`)
        }

        if (productUpdate.name) {
            productRecord.name = productUpdate.name;
        }

        if (productUpdate.description) {
            productRecord.description = productUpdate.description
        }

        if (productUpdate.price) {
            productRecord.price = productUpdate.price
        }

        if (productUpdate.stock) {
            productRecord.stock = productUpdate.stock
        }

        if (productUpdate.category_id) {
            productRecord.category_id = productUpdate.category_id
        }
        await productRecord.save();
    } catch (error) {
        console.error("Error at products services", error)
        throw new Error("Error at services Products")
    }
}

export const deleteProduct = async (productID: number): Promise<boolean> => {
    try {
        const userCount = await Products.count({ where: { productID } })
        if (userCount < 0) {
            console.log("No user found")
            return false
        }
        await Products.destroy({ where: { productID } })
        return true
    } catch (error) {
        console.error("Unexpected error occur at product services")
        return true
    }
}

export const productByCat = async (name: string) => {
    try {
        const productCat = await Product_Cat.findOne({ where: { name } })
        if (!productCat) {
            console.error("No product data category found")
            throw new Error("Error at services")
        }

        const productByCatData = await Products.findAll({ where: { category_id: productCat.id } })
        return productByCatData;
    } catch (error) {
        throw error
    }
}

export const getPaginatedProduct = async (page: number) => {
    try {
        const pageLimit = 2;
        const offset = (page - 1) * pageLimit;

        const { rows: products, count: totalItems } = await Products.findAndCountAll({
            limit: pageLimit,
            offset
        })

        const totalPages = Math.ceil(totalItems / pageLimit);

        return { products, totalPages }
    } catch (err) {
        console.error("Unexpected error at services", err)
        throw new Error("Error at services Products")
    }
}