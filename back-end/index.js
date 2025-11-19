import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/user/routes.js"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/users", UserRoutes);

app.listen(PORT, () => {
    console.log(`Serving is running in ${process.env.PORT}!`)
});