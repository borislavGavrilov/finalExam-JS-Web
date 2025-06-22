import { Schema , model , Types } from "mongoose";

const carShema = Schema({
    model : {
        type:String,
        required : true
    },
    manufacture : {
        type:String,
        required : true
    },
    engine : {
        type:String,
        required : true
    },
    topSpeed : {
        type:Number,
        required : true
    },
    image : {
        type:String,
        required : true
    },
    description : {
        type:String,
        required : true
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