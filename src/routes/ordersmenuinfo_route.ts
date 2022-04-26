import express, { Router } from 'express'
import { Request } from 'express'
import { Response } from 'express'
import {aut_cu} from '../middleware/aut_cu'

import {ordersmenuinfo} from '../models/ordersmenuinfo'
const or_info=ordersmenuinfo()
// To  can insert dates into tables
const pd = require('postgres-date');
// Create New Order 
const cr_or=async(req:Request,res:Response)=>{
    try{
        // Definition of all parameters that is needed for create new order function
        const id=req.params.id;
        const orderquantity=req.params.orderquantity;
       // const purchasedate=req.params.purchasedate;
        const purchasedate=new Date(req.params.purchasedate);
        const activeorder=req.params.activeorder;
        const customerid =req.params.customerid;
        const productid=req.params.productid;
        const credentialid=req.params.credentialid;

         
        // Create new order 
        const ne_or=await or_info.createorderinfo(Number(credentialid),Number(orderquantity),(purchasedate),Boolean(activeorder),Number(customerid),Number(productid))

        res.json(ne_or)
    }catch(e:unknown){
    res.sendStatus(400)//Bad Request
    console.log(`${e}`)
}
}
// Show a order info with id 
const sh_or= async(req: Request, res: Response) => {
    try{
        const or_id=req.params.id
        const or_s = await or_info.showorderinfo(Number(or_id));
        res.json(or_s)
  }catch(e)
  {
      res.sendStatus(404)
     // console.log(`${e}`)
      // Not Found
  }
}
// Show all orders info
const sha_or= async(req: Request, res: Response) => {
    try{
    const or_a = await or_info.showallorderinfo();
    res.json(or_a)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
// Update mobile number for order with id 
const up_or= async(req: Request, res: Response) => {
    try{
        const or_id=req.params.id;
        const or_newquantity=req.params.orderquantity;
        const credentialid=req.params.credentialid;
        const or_s = await or_info.updateorderinfo(Number(or_id),Number(credentialid),Number(or_newquantity));
        res.json(or_s)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
// Delete Order with id 
const del_or= async(req: Request, res: Response) => {
    try{
        const or_id=req.params.id;
        const credentialid=req.params.credentialid;
        console.log(or_id)
        console.log(credentialid)
    const cus_d = await or_info.deleteorderinfo(Number(or_id),Number(credentialid));
    //console.log(cus_d)
    res.json(cus_d)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
/*
// Delete all Orders 
const del_allor= async(req: Request, res: Response) => {
    try{       
        const credentialid=req.params.credentialid;

    const cus_d = await or_info.delete_allorderinfo(Number(credentialid));
    //console.log(cus_d)
    res.json(cus_d)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
*/
const ordersmenuinfo_routes = (app: express.Application) => {
    // Create new order with post request
    app.post('/ordersmenuinfo/credentialid/:credentialid/orderquantity/:orderquantity/purchasedate/:purchasedate/activeorder/:activeorder/customerid/:customerid/productid/:productid',aut_cu,cr_or)
    //Show order info with id number for customer using get request
    app.get('/ordersmenuinfo/id/:id', sh_or)
    // Show all orders info using get request
    app.get('/ordersmenuinfo', sha_or)
    // Update order quantity using put request
    app.put('/ordersmenuinfo/credentialid/:credentialid/orderid/:id/orderquantity/:orderquantity',aut_cu,up_or)
    // Delete order info with id number for order using delete request
    app.delete('/ordersmenuinfo/credentialid/:credentialid/orderid/:id',aut_cu,del_or)
   // app.delete('/ordersmenuinfo/alldelete/credentialid/:credentialid',aut_cu, del_allor)
    
  }
  
export default ordersmenuinfo_routes