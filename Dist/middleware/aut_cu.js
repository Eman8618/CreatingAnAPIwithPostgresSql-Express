"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aut_cu = void 0;
const customerscredentials_1 = require("../models/customerscredentials");
//import { customersmenuinfo } from '../models/customersmenuinfo';
const cu_cred = (0, customerscredentials_1.customerscredentials)();
const jwt = require("jsonwebtoken");
//const bcrypt=require("bcrypt")
//const pepper=require("salt")
const aut_cu = async (req, res, next) => {
    try {
        const credetialid = req.params.credentialid;
        //console.log(credetialid)
        const cu_c = await cu_cred.id_showcustomercredentail(Number(credetialid));
        //console.log(cu_c)
        const cus_u = cu_c.username;
        const cus_ps = cu_c.password_di;
        //console.log(cus_u)
        //console.log(cus_ps)
        const cus_au = await cu_cred.Aut_fun(cus_u, cus_ps);
        const token_s = jwt.sign(cus_au, process.env.Token_SEC);
        //console.log(token_s)
        const cred = jwt.verify(token_s, process.env.TOKEN_SEC);
        //console.log(cred.password_di)
        //console.log(jwt.verify(token_s,process.env.TOKEN_SEC))
        next();
    }
    catch (e) {
        res.sendStatus(403);
        console.log(`Not authorized to login  ${e}`);
        return;
        // Not Found
    }
};
exports.aut_cu = aut_cu;
//# sourceMappingURL=aut_cu.js.map