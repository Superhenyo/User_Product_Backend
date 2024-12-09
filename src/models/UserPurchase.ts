import { Table, Column, Model, DataType, PrimaryKey, AllowNull, AutoIncrement, ForeignKey, BelongsTo } from "sequelize-typescript";
import Users from "../models/Users";
import Products from "../models/Products";

@Table({
    tableName: "UserPurchases",
    timestamps: true,
})
class UserPurchases extends Model {
    @PrimaryKey
    @AllowNull(false)
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    declare purchaseID: number;

    @ForeignKey(() => Users)
    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    declare userID: string

    @ForeignKey(() => Products)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    declare productID: number

    @AllowNull(false)
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    declare purchaseDate: Date;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    declare quantity: number

    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL(20, 2)
    })
    declare totalPrice: number

    @Column({
        type: DataType.ENUM('Pending', 'Completed', 'Cancelled'),
        defaultValue: 'Pending'
    })
    declare status: string

    @BelongsTo(() => Users)
    user!: Users;

    @BelongsTo(() => Products)
    product!: Products

}

export default UserPurchases;