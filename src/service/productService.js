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

         if (getProduct.owner.toString === userId){
           throw Error('Owners cannot like or recommend')
        }
     
        getProduct.likes.push(userId)

        return getProduct.save()

    },
     deleteProduct(productId) {
      return Car.findByIdAndDelete(productId)

    },
    async editProduct(newData , productId , getUserId){

        const findItem = await this.getProduct(productId)


        if (findItem.owner.toString() !== getUserId ){
            throw Error('Only owner can edit')
        }

       return await Car.findByIdAndUpdate(productId ,newData , {runValidators :  true})
        
    },
    async findMyCars(userId){
   return  Car.find({ owner: userId });
   }
}

