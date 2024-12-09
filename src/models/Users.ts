import { Table, Column, Model, DataType, IsEmail, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
  tableName: 'Users',
  timestamps: false
})

class Users extends Model {

  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
  })
  declare userID: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
  })
  declare firstName: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
  })
  declare lastName: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING(255),
  })
  declare role: string;

  @IsEmail
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  declare password: string;
}

export default Users;
