import "dotenv/config";
import { Router } from "express";
import User from "./model.js";
import bcrypt from "bcryptjs";
import { JWTSign, JWTVerify } from "../../utils/jwt.js";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync(10);

router.get('/', async (req, res) => {
    try {
        const userDoc = await User.find();
        res.json(userDoc);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/profile', async (req, res) => {
    try {
        const userInfo = await JWTVerify(req);
        res.json(userInfo);
    } catch (error) {
        res.status(401).json(error);
    }
});

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {
        const newUserDoc = await User.create({
            name: name,
            email: email,
            password: encryptedPassword,
        });

        const { _id } = newUserDoc;
        const newUserObj = { name, email, _id };

        try {
            const token = await JWTSign(newUserObj);
            res.cookie("token", token).json(newUserObj);
        } catch (error) {
            res.status(500).json(error);
        }

    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userDoc = await User.findOne({ email: email });

        if (userDoc) {
            const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
            const { name, _id } = userDoc;

            if (passwordCorrect) {
                const newUserObj = { name, email, _id };
                try {
                    const token = await JWTSign(newUserObj);
                    res.cookie("token", token).json(newUserObj);
                } catch (error) {
                    res.status(500).json(error);
                }
            } else {
                res.status(401).json("Senha inválida!");
            }

        } else {
            res.status(400).json("Usuário não encontrado!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie("token").json("Deslogado com sucesso!");
});

export default router;