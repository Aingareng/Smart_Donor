
import User from "../models/user";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import user from "../models/user";




const saveUser: any = async (req: Request, res: Response) => {
  let emailValidate = await User.findOne({ email: req.body.email })

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.error(err)
    }

    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      password: hash,
      bloodType: req.body.bloodType,
    }
    if (!emailValidate) {
      const users: any = new User(newUser)
      console.log(users)
      try {
        const user: any = users.save()
        res.json({ users })
      } catch (error) {
        console.error(error)
      }
    } else {
      res.json({
        "status": "error",
        "message": "gagal menyimpan pengguna"
      })
    }
  })


}

const loginUser = async (req: Request, res: Response) => {
  const userEmail = await User.findOne({ email: req.body.email })
  const userPassword: any = userEmail?.password


  bcrypt.compare(req.body.password, userPassword, (err, result) => {
    if (err) return res.send(result)

    res.send(result)


  })
}

const donorUser: any = async (req: Request, res: Response) => {
  try {
    const users: any = await User.find()
    res.send(users)
  } catch (error: any) {
    console.error(error);

    res.status(500).json({ message: error.message })
  }
}

const donorTable = async (req: Request, res: Response) => {
  const userItem = []
  const userBloodRequest = await User.find({ bloodType: req.body.bloodType })
  userItem.push(...userBloodRequest)
  res.send(userItem)

}




export { saveUser, donorUser, loginUser, donorTable }