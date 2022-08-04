import express from "express";
import { donorUser, saveUser, loginUser, donorTable } from "../controllers/userController";

const route: any = express.Router()
route.post('/register', saveUser)
route.post('/login', loginUser)
route.get('/', donorUser)
route.get('/donor', donorUser)
route.post('/donor', donorTable)

export default route