import "dotenv/config";
import express from "express";

import { connectDb } from "./config/db.js";
import UserRoutes from "./domains/users/routes.js";
import PlaceRoutes from "./domains/places/routes.js";


import cors from "cors";
import cookieParse from "cookie-parser";

const app = express();
const PORT = process.env.PORT;
connectDb();

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