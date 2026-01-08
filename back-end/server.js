import express from "express";
import cors from "cors";
import cookieParse from "cookie-parser";
import routes from "./routes/index.js"

export const app = express();

app.use(express.json());
app.use(cookieParse());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(routes);


