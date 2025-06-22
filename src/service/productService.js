import Car from "../models/Cars.js"
export default {
     create (productData , owner){
      console.log(productData);
      console.log(owner);
      
      
     return Car.create({...productData , owner})
    },
    getAll(){
        return Car.find()
    }
}