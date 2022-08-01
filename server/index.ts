import express, { Express } from "express";
import mongoose from "mongoose";
import route from "./router/route";
import cors from "cors";

const app: Express = express()
const uri: string = "mongodb://127.0.0.1:27017/smart_donor"

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.error(`Mongo message : ${err}`);
  }
  console.log(`Mongoose Connect`)
})

const client = mongoose.connection
client.on('error', (err) => console.log(err))
client.once('open', () => console.log('database connected'))

app.use(cors())
app.use(express.json())
app.use('/user', route)

app.listen(8080, () => console.log("Server Berjalan"))
