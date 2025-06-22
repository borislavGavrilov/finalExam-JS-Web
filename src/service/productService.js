import Car from "../models/Cars.js"
export default {
    create (productData , owner){
      console.log(productData);
      console.log(owner);
      
      
     return Car.create({...productData , owner})
    },
    getAll(){
        return Car.find()
    },
    getProduct(productId) {
        return Car.findById(productId)

    },
   async likes(productId , userId){
    
      const getProduct = await this.getProduct(productId)
       if (getProduct.owner.equals(userId)){
            throw Error('Owners cannot like or recommend')
        }
     
        getProduct.likes.push(userId)

        return getProduct.save()

    }
    
}