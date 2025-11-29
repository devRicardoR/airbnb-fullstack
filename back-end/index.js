import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/user/routes.js";
import cors from "cors";
import cookieParse from "cookie-parser"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParse());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use("/users", UserRoutes);

app.listen(PORT, () => {
    console.log(`Serving is running in ${process.env.PORT}!`)
});