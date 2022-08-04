"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const route = express_1.default.Router();
route.post('/register', userController_1.saveUser);
route.post('/login', userController_1.loginUser);
route.get('/', userController_1.donorUser);
route.get('/donor', userController_1.donorUser);
route.post('/donor', userController_1.donorTable);
exports.default = route;
