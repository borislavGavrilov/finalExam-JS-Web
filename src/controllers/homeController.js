import { Router } from "express";
import productService from "../service/productService.js";

const homeController = Router()


homeController.get('/' , async (req,res) => {
  
  res.render('home' , {pageTitle : 'Home'})

})


export default homeController