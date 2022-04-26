import express, { Router } from 'express'
import { Request } from 'express'
import { Response } from 'express'
const jwt = require("jsonwebtoken");
import {aut_cu} from '../middleware/aut_cu'

import {productsmenuinfo} from '../models/n_productsmenuinfo'
const pro_info=productsmenuinfo()


// Create New Product 
const cr_prod=async(req:Request,res:Response)=>{

    
        // Definition of all parameters that is needed for create new product function
        const productname=req.params.productname;
        const price=req.params.price;
        const category=req.params.category;
        const productioncountry =req.params.productioncountry;
        const credentialid=req.params.credentialid;

        try{
        // Create new product
        const ne_pro=await pro_info.createproductinfo(Number(credentialid),productname,parseFloat(price),category,productioncountry);
        res.json(ne_pro)
        
    }catch(e:unknown){
    res.sendStatus(400)//Bad Request
    console.log(`${e}`)
}
}
// Show a product info with id 
const sh_pro= async(req: Request, res: Response) => {
    try{
        const pro_id=req.params.id;
        const pro_s = await pro_info.showproductinfo(Number(pro_id));
        res.json(pro_s)
  }catch(e)
  {
      res.sendStatus(404)
     // console.log(`${e}`)
      // Not Found
  }
}
// Show all products info
const sha_pro= async(req: Request, res: Response) => {
    try{
    const pro_a = await pro_info.showallproductinfo();
    res.json(pro_a)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
// Update price value for customer with id 
const up_pro= async(req: Request, res: Response) => {
    try{
        const pro_id=req.params.id;
        const pro_newprice=req.params.price;
        const credentialid=req.params.credentialid;

        const pro_s = await pro_info.updateproductinfo(Number(pro_id),Number(credentialid),Number(pro_newprice));
        res.json(pro_s)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
// Delete Product with id 
const del_pro= async(req: Request, res: Response) => {
    try{
        const pro_id=req.params.id;
        const credentialid=req.params.credentialid;

    const pro_d = await pro_info.deleteproductinfo(Number(pro_id),Number(credentialid));
    res.json(pro_d)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
/*
// Delete all Product 
const del_allpro= async(req: Request, res: Response) => {
    try{
       
        const credentialid=Number(req.params.credentialid);

    const pro_d = await pro_info.delete_allproductinfo(credentialid);
    res.json(pro_d)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}*/

const productsmenuinfo_routes = (app: express.Application) => {
    // Create new product with post request
    app.post('/productsmenuinfo/credentialid/:credentialid/productname/:productname/price/:price/category/:category/productioncountry/:productioncountry',aut_cu,cr_prod)
    //Show product info with id number for customer using get request
    app.get('/productsmenuinfo/id/:id', sh_pro)
    // Show all products info using get request
    app.get('/productsmenuinfo', sha_pro)
    // Update product price using put request
    app.put('/productsmenuinfo/credentialid/:credentialid/productinfoid/:id/price/:price',aut_cu, up_pro)
    // Delete product info with id number for customer using delete request
    app.delete('/productsmenuinfo/credentialid/:credentialid/productinfoid/:id',aut_cu,del_pro)
    // Delete all products using delete request
   //app.delete('/productsmenuinfo/alldelete/credentialid/:credentialid',aut_cu,del_allpro)
  }
  
export default productsmenuinfo_routes