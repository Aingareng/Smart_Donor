import express from "express";
import { donorUser, saveUser, loginUser } from "../controllers/userController";

const route: any = express.Router()
route.post('/register', saveUser)
route.post('/login', loginUser)
route.get('/', donorUser)

export default route