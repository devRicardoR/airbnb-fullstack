import { Router } from "express";
const router = Router();

import Place from "./model.js";
import { JWTVerify } from "../../utils/jwt.js";

router.post("/", async (req, res) => {
    const {
            title,
            city,
            photos ,
            description,
            extras,
            perks,
            price,
            checkin,
            checkout,
            guests
    } = req.body

    try {
        const { _id: owner } = await JWTVerify(req)
        
        const newPlaceDoc = await Place.create({
            owner,
            title,
            city,
            photos ,
            description,
            extras,
            perks,
            price,
            checkin,
            checkout,
            guests
        })
        res.json(newPlaceDoc)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

export default router;