import { Router } from "express";
import Place from "./model.js";
import { JWTVerify } from "../../utils/jwt.js";
import { downloadImage } from "../../utils/imageDownloader.js";
import { __dirname } from "../../index.js";

const router = Router();

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

router.post("/upload/link", async (req, res) => {
    const { link } = req.body
    await downloadImage(link, `${__dirname}/tmp/`)
})

export default router;