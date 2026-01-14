import "dotenv/config";
import { app } from "./server.js";

import { connectDb } from "./config/db.js";
const PORT = process.env.PORT;
connectDb();

app.listen(PORT, () => {
    console.log(`Serving is running in ${process.env.PORT}!`)
});