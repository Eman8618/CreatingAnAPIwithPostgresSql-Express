import express, { NextFunction, Router } from 'express'
import { Request } from 'express'
import { Response } from 'express'
//const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
//const pepper=require("salt");
import {customerscredentials} from '../models/customerscredentials'
import {aut_cu} from '../middleware/aut_cu'
import { nextTick } from 'process';
const bcrypt=require("bcrypt")
const pepper=require("salt")

const cu_cred=customerscredentials()

// Create New Customer credentials 
const cr_cred=async(req:Request,res:Response)=>{
    try{
        // Definition of all parameters that is needed for create new customer function
        //const id=req.params.id;
        const email=req.params.email;
        const username=req.params.username;
        const password_di=req.params.password_di;
        
        // Create new customer credetial
        const necr_cu=await cu_cred.createcustomercredential(email,username,password_di)
        //Generate token for new customer
        var token_cu=jwt.sign(necr_cu,process.env.Token_SEC)
         res.json(token_cu)
         return
        //res.json(necr_cu.password_di)
    }catch(e:unknown){
    res.sendStatus(400)//Bad Request
    console.log(`${e}`)
}
}
// Authorize a customer credential with username
const au_cu= async(req: Request, res: Response,next:NextFunction) => {
    try{
        const cus_user=req.params.username ;
        const  cus_ps=req.params.password_di ;
        const cus_au = await cu_cred.Aut_fun(cus_user,cus_ps);
        const token_s=jwt.sign(cus_au,process.env.TOKEN_SEC)
        const h_cus_ps=bcrypt.hashSync(cus_ps+ pepper, Number(process.env.SALT_ROUNDS));

        res.json({cu_to:{cus_user,h_cus_ps,token_s}})
        next()
        
  }catch(e)
  {
      res.sendStatus(403)
    console.log(`Not authorized to login  ${e}`)
      // Not Found
  }
}
// 
// Authorize a customer credential with username

     

// Show a customer credential with username
const sh_cucr= async(req: Request, res: Response) => {
    try{
        const cuscr_user=req.params.username;
        const cus_s = await cu_cred.showcustomercredentail(cuscr_user);
        res.json(cus_s)
  }catch(e)
  {
      res.sendStatus(404)
     // console.log(`${e}`)
      // Not Found
  }
}
//Show customer credentials with id
const sh_cucrid= async(req: Request, res: Response) => {
    try{
        const cuscr_id=req.params.id;
        const cus_s = await cu_cred.id_showcustomercredentail(Number(cuscr_id));
        res.json(cus_s)
  }catch(e)
  {
      res.sendStatus(404)
     // console.log(`${e}`)
      // Not Found
  }
}

// Show all customers credentials
const sha_cu= async(req: Request, res: Response) => {
    try{
    const cus_a = await cu_cred.showallcustomercredentail();
    res.json(cus_a)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
// Update email  for customer with username 
const up_cu_em= async(req: Request, res: Response) => {
    try{
        const cus_username=req.params.username;
        //const cus_ps=req.params.password_di;
        const cus_newemail=req.params.email;
        //console.log(cus_newemail)
        const cus_s = await cu_cred.updatecustomercredentailemail(cus_username,cus_newemail);
        res.json(cus_s)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}// Update password for customer credential with user name 
const up_cu_ps= async(req: Request, res: Response) => {
    try{
        const cus_username=req.params.username;
        const cus_newpass=req.params.password_di;
        //const cus_newpass=req.params.newps;

        const cus_s = await cu_cred.updatecustomercredentailpassword(cus_username,cus_newpass);
        res.json(cus_s)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
// update password

// Delete Customer with id 
const delcr_cu= async(req: Request, res: Response) => {
    try{
        //const cus_username=req.params.username;
        //const cus_ps=req.params.password_di;
        const cus_id=req.params.id;
    const cus_d = await cu_cred.deletecustomercredential(Number(cus_id));
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
// Delete all
const delcr_allcu= async(req: Request, res: Response) => {
    try{
        const cus_id=Number(req.params.id);
    const cus_d = await cu_cred.delete_allcustomercredential(cus_id);
    //console.log(cus_d);
    res.json(cus_d);
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}
*/

const customerscredentnails_routes = (app: express.Application) => {
    // Create new customer with post request
    app.post('/customerscredentials/email/:email/username/:username/password_di/:password_di',cr_cred)
    // authorize user 
    app.post('/auth/username/:username/password_di/:password_di',au_cu)
    //Show customer credentials with id
    app.get('/customerscredentials/id/:id',sh_cucrid)
    //Show customer credentials with user name for customer using get request
    app.get('/customerscredentials/username/:username', sh_cucr)
    // Show all customers credentials using get request
    app.get('/customerscredentials', sha_cu)
    // Update password for customer credential using put request
    app.put('/customerscredentials/username/:username/email/:email',up_cu_em)
    // Update password for customer credential using put request
    app.put('/customerscredentials/username/:username/password_di/:password_di/email/:email',up_cu_ps)
    // Delete customer credential with id number for customer using delete request
    app.delete('/customerscredentials/id/:id',delcr_cu)
    // Delete all custmers credentials 
    //app.delete('/customerscredentials/alldelete',delcr_allcu)

  
  }
  
export default customerscredentnails_routes