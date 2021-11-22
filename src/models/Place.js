import { Schema, model } from "mongoose";

const placeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        know: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Place", placeSchema);
