import "dotenv/config";
import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

connectDb();

router.get('/', async(req, res) => {
    try {
        const userDoc = await User.find();
        res.json(userDoc)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/', async(req, res) => {
    const { name, email, password } = req.body
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {
        const newUserDoc = await User.create({
            name: name,
            email: email,
            password: encryptedPassword,
        })
        res.json(newUserDoc);
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    
    try {
        const userDoc = await User.findOne({email: email})

        if (userDoc) {
            const passwordCorrect = bcrypt.compareSync(password, userDoc.password)
            const { name, _id } = userDoc

            if(passwordCorrect){
                const newUserObj = { name, email, _id }
                const token = jwt.sign(newUserObj, JWT_SECRET_KEY)

                res.cookie("token", token).json(newUserObj)
            }else{
                res.status(404).json("Senha inválida!")
            }

        } else {
            res.status(400).json("Usuário não encontrado!")
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

export default router;