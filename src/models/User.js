import { Schema , model } from "mongoose";

const userShema = new Schema({
    firstName : {
        type:String ,
        required:true,
        minLength:3,
    },
    lastName : {
        type:String ,
        required:true,
        minLength:3
    },
    email: {
        type : String,
        required : true,
        minLength:10 
    } , 
    password: {
        type : String,
        required : true, 
        min:4
    }
})

const User = model('User' , userShema)

export default User

