import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/config';

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  phone: string;
  age:number;
  password:string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public name!: string;
  public email!: string;
  public phone!: string;
  public age!: number;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      }
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
