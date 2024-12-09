import Users from "../models/Users";
import Products from "../models/Products";
import UserPurchases from "../models/UserPurchase";

export const newOrder = async (order: {
    userID: string,
    productID: number,
    quantity: number,
    totalPrice: number
}) => {
    try {
        const { userID, productID, quantity, totalPrice } = order
        const userExist = await Users.findOne({ where: { userID } })
        if (!userExist) {
            console.error("No User for Order")
            throw new Error("No User for Order")
        }
        const productExist = await Products.findOne({ where: { productID } })
        if (!productExist) {
            console.error("No product for Order")
            throw new Error("No Product for Order")
        }

        if (productExist.stock < quantity) {
            console.error("Not enough stock")
            throw new Error("No Stock for Order")
        }

        productExist.stock -= quantity
        await productExist.save()

        const newUserPurchase = new UserPurchases({ userID, productID, quantity, totalPrice })
        newUserPurchase.status = "Pending"

        await newUserPurchase.save()
    } catch (err) {
        console.error("Error at userpurchase services", err)
        throw err
    }

}

export const allOrders = async () => {
    try {
        const ordersRecord = await UserPurchases.findAll()
        return ordersRecord;
    } catch (err) {
        console.error(err)
        throw new Error("Unexpected error occur")
    }
}

export const getPaginatedProducts = async (page: number) => {
    try {
        const pageLimit = 2;
        const offset = (page - 1) * pageLimit;

        const { rows: orders, count: totaItems } = await UserPurchases.findAndCountAll({
            limit: pageLimit,
            offset
        })

        const totalPages = Math.ceil(totaItems / pageLimit)
        return { orders, totalPages }
    } catch (err) {
        console.error("Unexpected error at services", err)
        throw new Error("Error at services Products")
    }
}
