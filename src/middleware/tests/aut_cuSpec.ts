import { Request}from 'express'
import {Response } from 'express'
import { NextFunction } from 'express';
// Importing supertest 
import supertest from 'supertest';
import {customerscredentials} from '../../models/customerscredentials' 
import app from '../../server'
// Define request as supertest of app
const req = supertest(app);
const cu_cred=customerscredentials()
const jwt = require("jsonwebtoken");
const ne_c=cu_cred.createcustomercredential('ew@gmail.com','Eman_7','tyu');

describe('Authentication and authorization function',()=>{
    /*
    beforeAll(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL=10000;
    });*/
    it('Determine if customer is authoized  to login',()=>{
    const aut_cu= async(req: Request, res: Response ,next:NextFunction) => {
    try{
        const res = await app.post('/auth/username/Eman_7/password_di/tyu')
        const credentialid=(await ne_c).id
        //console.log(credetialid)
        const cu_c=await cu_cred.id_showcustomercredentail(Number(credentialid));
        //console.log(cu_c)
        const cus_u=cu_c.username as string;
        const cus_ps=cu_c.password_di as string;
        //console.log(cus_u)
        //console.log(cus_ps)
        const cus_au = await cu_cred.Aut_fun(cus_u,cus_ps);
        const token_s=jwt.sign(cus_au,process.env.Token_SEC)
        //console.log(token_s)
        const cred = jwt.verify(token_s,process.env.TOKEN_SEC) 
        //console.log(cred.password_di)
        //console.log(jwt.verify(token_s,process.env.TOKEN_SEC))
        next()
        return
  }catch(e)
  {
      res.sendStatus(403)
    console.log(`Not authorized to login  ${e}`)
    return
    // Not Found
  }
}
    }
)})