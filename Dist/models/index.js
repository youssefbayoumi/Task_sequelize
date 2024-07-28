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
exports.initializeModels = exports.models = exports.sequelize = void 0;
const user_1 = __importDefault(require("./user"));
const config_1 = __importDefault(require("../config/config"));
exports.sequelize = config_1.default;
const models = {
    User: user_1.default,
};
exports.models = models;
const initializeModels = () => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.authenticate();
    yield config_1.default.sync();
});
exports.initializeModels = initializeModels;
