import "dotenv/config";
import { app } from "./server.js";

import { connectDb } from "./config/db.js";

import { fileURLToPath } from "url";
import { dirname } from "node:path";

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

const PORT = process.env.PORT;
connectDb();

app.listen(PORT, () => {
    console.log(`Serving is running in ${process.env.PORT}!`)
});