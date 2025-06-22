import { Router } from "express";
import { isAuth } from "../middlewares/authMiddlewares.js";
import productService from "../service/productService.js";
import { getError } from "../utils/errorUtils.js";
import usersService from "../service/usersService.js";

const productController = Router()

productController.get('/create' , isAuth ,(req,res) => {
  res.render('products/create')
})

productController.post('/create' , isAuth , async (req,res) => {
  const carData = req.body
  const ownerId = req.user.id

  try {
   await productService.create(carData , ownerId)
   res.redirect('catalog')
    
  } catch (err) {
    console.log(err);
    

    res.render('products/create' , {error : getError(err) , productData : carData})
    
  }
})

productController.get('/catalog' , async (req,res) => {
  const getAllData = await productService.getAll()

  try {
    res.render('catalog' , {getAllData})
    
  } catch (error) {
    
  }
})

productController.get('/:productId/details' ,async (req,res) => {
  const productId = req.params.productId

  try {
     const productData = await productService.getProduct(productId)
     
     const isOwner = productData.owner[0].equals(req.user?.id)
    
     const ownerData = await usersService.findUserById(productData.owner.toString())

     const showControls = req.isAuthenticated && isOwner;

      const isLiked = productData.likes.includes(req.user?.id)

    
    res.render('products/details' , {productData , isOwner ,ownerData , showControls , isLiked})

    
  } catch (err) {
     res.render('404' , {error : getError(err)})
    
  }
})

productController.get('/:productId/likes' , isAuth, async (req,res) => {
  const productId = req.params.productId
  const userId = req.user.id

  
 try {

  await productService.likes(productId , userId)

  res.redirect(`/products/${productId}/details`)
  
  
 } catch (err) {

  res.render('404' , {error : getError(err)})
  
 } 
  
})



export default productController