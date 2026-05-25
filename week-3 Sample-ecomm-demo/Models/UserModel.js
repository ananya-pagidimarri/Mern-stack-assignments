import { Schema,model } from "mongoose";
//create cart schema
const cartSchema=new Schema({
       product: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true
      },

      quantity: {
        type: Number,
        default: 1
      }
});
//create user schema (username,password,age)
const userSchema= new Schema({
    username:{
        type:String,
        required:[true,"name is required"],
        minlength:[4,"Min length should be 4"],
        maxlength:[6,"Max length exceeded"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"dup user"]
        
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    cart:{
        type:[cartSchema]
    }


    },
{
        strict:"throw",
        timestamps:true
    });
//create user mode with that schema
export const UserModel=model("user",userSchema);