import User from "../models/User.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/userToken.js"


export default {
   async register(firstName, lastName,email , password , rePassword){

    const isExist = await this.findUser(email)
    console.log(password);
    console.log(rePassword);
    
   
    if (isExist){
        throw Error ('Email alredy exist!')
    }

    if (password !== rePassword){

        throw Error('Wrong password match !')
    }

   if (!password || password.trim() === '') {
  throw new Error('Password is required');
}
    
    const hashPass = await bcrypt.hash(password , 10)
    password = hashPass

    const newUser = await User.create({firstName, lastName,email,password})

    const token = generateToken(newUser)

    return token

    },

   async findUser (email){

    return User.findOne({email : email})
    

   }
   ,
   async login(email , password){

    const existUser =  await this.findUser(email)
    
    if (!existUser){
     throw Error('Email alredy exist!')
    }

    const comparePass = await bcrypt.compare(password , existUser.password)

   if (!comparePass){
    throw Error ('Wrong password')
   }


   const token = generateToken(existUser)
   console.log(token);
   
   
   return token
   }
}
