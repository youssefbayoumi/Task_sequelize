import { User } from '../Interface/user';
import models from "../utils/sequelize"

const save = async (userData: User) => {
    try {
        // Corrected to use Sequelize syntax for creating a user
        return await models.User.create(userData);
    } catch (error) {
        throw new Error("Error saving user");
    }
}

const getUserByEmail = async (email: string) => {
    try {
        // Corrected to use Sequelize syntax for finding a user by email
        return await models.User.findOne({ where: { email: email } });
    } catch (error) {
        throw new Error("Error fetching user by email");
    }
}

const getUsers = async () => {
    try {
        // Corrected to use Sequelize syntax for fetching all users
        return await models.User.findAll();
    } catch (error) {
        throw new Error("Error fetching users");
    }
}

const deleteUserByEmail = async (email: string) => {
    try {
        return await models.User.destroy({ where: { email: email } });
    } catch (error) {
        throw new Error("Error deleting user by email");
    }
}

const getUserByPhone = async (phone: string) => {
    try {
        return await models.User.findOne({ where: { phone: phone } });
    } catch (error) {
        throw new Error("Error fetching user by phone");
    }
}

const updateAgeByEmail = async (email: string, newAge: number) => {
    try {

        const [numberOfAffectedRows, affectedRows] = await models.User.update(
            { age: newAge },
            { where: { email: email }, returning: true }
        );

        if (numberOfAffectedRows === 0) {
            throw new Error(`No user found with email: ${email}`);
        }

        return affectedRows;
    } catch (error:any) {
        throw new Error(error.message);
    }
}

const getUserById = async (id: string) => {
    try {
        return await models.User.findOne({ where: { id: id } });
    } catch (error) {
        throw new Error("Error fetching user by ID");
    }
}

const deleteAllUsers = async () => {
    try {
        return await models.User.destroy();
    } catch (error) {
        throw new Error("Error deleting all users!");
    }
}

export default { save, getUserByEmail, getUsers, deleteUserByEmail, getUserByPhone, updateAgeByEmail, getUserById, deleteAllUsers };
