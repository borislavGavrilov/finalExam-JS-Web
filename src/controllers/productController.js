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
    res.render('products/catalog' , {getAllData})
    
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
     
     const likesUsers = productData.likes

     const usersData = await usersService.findUsers(likesUsers)

     const usersEmails = usersData.map(user => user.email).join(', ');
     
    res.render('products/details' , {productData , isOwner ,ownerData , showControls , isLiked , usersEmails})

    
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
productController.get('/:productId/delete' , isAuth ,async (req,res) => {

  const productId = req.params.productId

  const getUserId = req.user.id

  const product =  await productService.getProduct(productId)

  if (product.owner.toString() !== getUserId ){
   return  res.redirect('404' , {error : 'Only owner can delete this product'})
  }

  await productService.deleteProduct(productId)

  res.redirect('/products/catalog')

  
})

productController.get('/:productId/edit',isAuth , async (req,res) => {
  const getProductId = req.params.productId

  const getProduct =  await productService.getProduct(getProductId)

  res.render('products/edit' , {getProduct})

})

productController.post('/:productId/edit' , isAuth , async (req,res) => {

  const updatedData = req.body
  const productId = req.params.productId
  const userId = req.user.id

  try {
      await productService.editProduct(updatedData , productId , userId)

     res.redirect(`/products/${productId}/details`)
    
  } catch (err) {

    res.render('products/edit' , {error : getError(err) , product : updatedData})
    
  }

})

productController.get('/myPosts' , isAuth , async (req,res) => {
  const getUserId = req.user.id
  
  
  
  try {
     const cars = await productService.findMyCars(getUserId);
    res.render('user/myposts' , {cars})
    
  } catch (err) {
    
  }
  
   res.render('user/myposts')
 })






export default productController