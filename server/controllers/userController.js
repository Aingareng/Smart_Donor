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
exports.donorTable = exports.loginUser = exports.donorUser = exports.saveUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saveUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let emailValidate = yield user_1.default.findOne({ email: req.body.email });
    bcrypt_1.default.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            console.error(err);
        }
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            password: hash,
            bloodType: req.body.bloodType,
        };
        if (!emailValidate) {
            const users = new user_1.default(newUser);
            console.log(users);
            try {
                const user = users.save();
                res.json({ users });
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            res.json({
                "status": "error",
                "message": "gagal menyimpan pengguna"
            });
        }
    });
});
exports.saveUser = saveUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = yield user_1.default.findOne({ email: req.body.email });
    const userPassword = userEmail === null || userEmail === void 0 ? void 0 : userEmail.password;
    bcrypt_1.default.compare(req.body.password, userPassword, (err, result) => {
        if (err)
            return res.send(result);
        res.send(result);
    });
});
exports.loginUser = loginUser;
const donorUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.send(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
exports.donorUser = donorUser;
const donorTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userItem = [];
    const userBloodRequest = yield user_1.default.find({ bloodType: req.body.bloodType });
    userItem.push(...userBloodRequest);
    res.send(userItem);
});
exports.donorTable = donorTable;
