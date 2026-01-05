import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

export default mongoose.model("", placeSchema);