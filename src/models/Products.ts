import { Table, Column, Model, DataType, PrimaryKey, AllowNull, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Product_Cat from './ProductsCategory';  // Adjust the import if the model file name differs

@Table({
    tableName: 'Products',  // Set the table name to 'Products'
    timestamps: true,       // Automatically manage 'createdAt' and 'updatedAt' fields
})
class Products extends Model {

    // Define the primary key for the 'Products' table.
    @PrimaryKey
    @AllowNull(false)  // Ensure this field cannot be null.
    @AutoIncrement     // Automatically increment the value when a new record is created.
    @Column({
        type: DataType.INTEGER,
    })
    declare productID: number;

    // Define the 'name' column for the 'Products' table.
    @AllowNull(false)  // Ensure this field cannot be null.
    @Column({
        type: DataType.STRING(255)  // Data type is a string with a max length of 255 characters.
    })
    declare name: string;

    // Define the 'description' column for the 'Products' table.
    @AllowNull(true)  // Allow this field to be null (optional).
    @Column({
        type: DataType.TEXT  // Data type is TEXT for longer descriptions.
    })
    declare description: string;

    // Define the 'price' column for the 'Products' table.
    @AllowNull(false)  // Ensure this field cannot be null.
    @Column({
        type: DataType.DECIMAL(10, 2)  // Data type is DECIMAL with 10 digits and 2 decimal places.
    })
    declare price: number;

    // Define the 'stock' column for the 'Products' table.
    @AllowNull(false)  // Ensure this field cannot be null.
    @Column({
        type: DataType.INTEGER  // Data type is an integer for 'stock'
    })
    declare stock: number;

    // Define the 'category_id' column, which will act as a foreign key linking to the 'Categories' table.
    @ForeignKey(() => Product_Cat)  // Define the foreign key relationship to 'Categories'
    @AllowNull(true)  // Allow this field to be null (optional, as some products may not have a category)
    @Column({
        type: DataType.INTEGER  // Data type is an integer for 'category_id'
    })
    declare category_id: number;

    // Establish the 'BelongsTo' relationship from 'Products' to 'Categories'
    @BelongsTo(() => Product_Cat, {
        foreignKey: 'category_id',  // 'category_id' in 'Products' will reference 'id' in 'Categories'
        targetKey: 'id'  // 'id' in 'Categories' will be the target key for this relationship
    })
    declare category: Product_Cat;
}

export default Products;
