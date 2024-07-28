"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../utils/sequelize"));
const save = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Corrected to use Sequelize syntax for creating a user
        return yield sequelize_1.default.User.create(userData);
    }
    catch (error) {
        throw new Error("Error saving user");
    }
});
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Corrected to use Sequelize syntax for finding a user by email
        return yield sequelize_1.default.User.findOne({ where: { email: email } });
    }
    catch (error) {
        throw new Error("Error fetching user by email");
    }
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Corrected to use Sequelize syntax for fetching all users
        return yield sequelize_1.default.User.findAll();
    }
    catch (error) {
        throw new Error("Error fetching users");
    }
});
const deleteUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sequelize_1.default.User.destroy({ where: { email: email } });
    }
    catch (error) {
        throw new Error("Error deleting user by email");
    }
});
const getUserByPhone = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sequelize_1.default.User.findOne({ where: { phone: phone } });
    }
    catch (error) {
        throw new Error("Error fetching user by phone");
    }
});
const updateAgeByEmail = (email, newAge) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [numberOfAffectedRows, affectedRows] = yield sequelize_1.default.User.update({ age: newAge }, { where: { email: email }, returning: true });
        if (numberOfAffectedRows === 0) {
            throw new Error(`No user found with email: ${email}`);
        }
        return affectedRows;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sequelize_1.default.User.findOne({ where: { id: id } });
    }
    catch (error) {
        throw new Error("Error fetching user by ID");
    }
});
const deleteAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sequelize_1.default.User.destroy();
    }
    catch (error) {
        throw new Error("Error deleting all users!");
    }
});
exports.default = { save, getUserByEmail, getUsers, deleteUserByEmail, getUserByPhone, updateAgeByEmail, getUserById, deleteAllUsers };
