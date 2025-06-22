import { Schema , model , Types } from "mongoose";
const pattern = /^https?:\/\/.+/

const carShema = Schema({
    model : {
        type:String,
        required : true,
        minLength : 2
    },
    manufacture : {
        type:String,
        required : true,
        minLength : 3
    },
    engine : {
        type:String,
        required : true,
        minLength : 3
    },
    topSpeed : {
        type:Number,
        required : true,
        minimum: 10
    },
    image : {
        type:String,
        required : true,
        match:pattern
    },
    description : {
        type:String,
        required : true,
        minLength:3,
        maxLength : 500
    },
    likes : [{
        type: Types.ObjectId,
        ref : 'User'
    }],
    owner : [{
         type : Types.ObjectId,
         ref : 'User'
    }]
})

const Car = model('Car' , carShema)

export default Car