import { Schema } from "mongoose";


export const CursoSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    imageURL: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

