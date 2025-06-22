import { Router } from "express";
import { isAuth } from "../middlewares/authMiddlewares.js";
import productService from "../service/productService.js";
import { getError } from "../utils/errorUtils.js";

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

productController.get('/catalog' , isAuth , async (req,res) => {
  const getAllData = await productService.getAll()

  try {
    res.render('catalog' , {getAllData})
    
  } catch (error) {
    
  }
})



export default productController