import "dotenv/config";
import express from "express";

import { connectDb } from "./config/db.js";
import UserRoutes from "./domains/users/routes.js";
import PlaceRoutes from "./domains/places/routes.js";


import cors from "cors";
import cookieParse from "cookie-parser";

import { fileURLToPath } from "url";
import { dirname } from "node:path";

const app = express();
const PORT = process.env.PORT;
connectDb();

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

app.use(express.json());
app.use(cookieParse());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/users", UserRoutes);
app.use("/places", PlaceRoutes);

app.listen(PORT, () => {
    console.log(`Serving is running in ${process.env.PORT}!`)
});