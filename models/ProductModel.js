import { Schema, model } from "mongoose";

const productSchema = new Schema(
{
    pid: {
        type: Number,
        required: [true, "Product ID is required"],
        unique: true
    },
    productName: {
        type: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be greater than 0"]
    }
},
{
    strict: "throw",
    timestamps: true
}
);

export const ProductModel = model("product", productSchema);
