"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const route_1 = __importDefault(require("./router/route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const uri = "mongodb://127.0.0.1:27017/smart_donor";
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.error(`Mongo message : ${err}`);
    }
    console.log(`Mongoose Connect`);
});
const client = mongoose_1.default.connection;
client.on('error', (err) => console.log(err));
client.once('open', () => console.log('database connected'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/user', route_1.default);
app.listen(8080, () => console.log("Server Berjalan"));
