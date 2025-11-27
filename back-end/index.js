import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/user/routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use("/users", UserRoutes);

app.listen(PORT, () => {
    console.log(`Serving is running in ${process.env.PORT}!`)
});