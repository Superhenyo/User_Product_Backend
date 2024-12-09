import { Table, Column, Model, DataType, PrimaryKey, AllowNull, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'Product_Cat',
    timestamps: true
})

class Product_Cat extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    declare id: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(255)
    })
    declare name: string;

    @AllowNull(true)
    @Column({
        type: DataType.TEXT
    })
    declare description: string;
}

export default Product_Cat;