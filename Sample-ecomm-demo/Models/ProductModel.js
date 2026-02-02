import { Schema, model } from "mongoose";
const productSchema = new Schema(
{
    productName: {
        type: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be greater than 0"]
    },
    brand: {
        type: String,
        required: [true, "brand is required"],
    }
},
{
    strict: "throw",
    timestamps: true,
    versionKey:false
}
);
//create model
export const ProductModel = model("product", productSchema);
