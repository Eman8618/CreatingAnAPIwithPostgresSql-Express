"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aut_cu_1 = require("../middleware/aut_cu");
const jwt = require("jsonwebtoken");
const customersmenuinfo_1 = require("../models/customersmenuinfo");
const cu_info = (0, customersmenuinfo_1.customersmenuinfo)();
// Create New Customer Info
const cr_cu = async (req, res) => {
    try {
        // Definition of all parameters that is needed for create new customer function
        const id = req.params.id;
        const credentialid = req.params.credentialid;
        const customername = req.params.customername;
        const mobile = req.params.mobile;
        const addresses = req.params.addresses;
        const customercountry = req.params.customercountry;
        const nationalid = req.params.nationalid;
        // Create new customer 
        const ne_cu = await cu_info.createcustomerinfo(Number(credentialid), customername, mobile, addresses, customercountry, nationalid);
        res.json(ne_cu);
    }
    catch (e) {
        res.sendStatus(400);
        return; //Bad Request
        //console.log(`${e}`)
    }
};
// Show a customer info with id 
const sh_cu = async (req, res) => {
    try {
        const cus_id = req.params.id;
        const cus_s = await cu_info.showcustomerinfo(Number(cus_id));
        res.json(cus_s);
    }
    catch (e) {
        res.sendStatus(404);
        // console.log(`${e}`)
        // Not Found
    }
};
// Show all customers info
const sha_cu = async (req, res) => {
    try {
        const cus_a = await cu_info.showallcustomerinfo();
        res.json(cus_a);
    }
    catch (e) {
        res.sendStatus(404);
        //console.log(`${e}`)
        // Not Found
    }
};
// Update mobile number for customer with id 
const up_cu = async (req, res) => {
    try {
        const cus_id = req.params.id;
        const cus_newmobile = req.params.mobile;
        const credentialid = req.params.credentialid;
        const cus_s = await cu_info.updatecustomerinfo(Number(cus_id), Number(credentialid), cus_newmobile);
        res.json(cus_s);
    }
    catch (e) {
        res.sendStatus(404);
        //console.log(`${e}`)
        // Not Found
    }
};
// Delete Customer with id 
const del_cu = async (req, res) => {
    try {
        const cus_id = req.params.id;
        const credentialid = req.params.credentialid;
        const cus_d = await cu_info.deletecustomerinfo(Number(cus_id), Number(credentialid));
        //console.log(cus_d)
        res.json(cus_d);
    }
    catch (e) {
        res.sendStatus(404);
        //console.log(`${e}`)
        // Not Found
    }
};
/*
// Delete Customer with all
const del_allcu= async(req: Request, res: Response) => {
    try{

        const credentialid=req.params.credentialid;
    const cus_d = await cu_info.delete_allcustomerinfo(Number(credentialid));
    //console.log(cus_d)
    res.json(cus_d)
  }catch(e)
  {
      res.sendStatus(404)
      //console.log(`${e}`)
      // Not Found
  }
}*/
const customersmenuinfo_routes = (app) => {
    // Create new customer with post request
    app.post('/customersmenuinfo/credentialid/:credentialid/customername/:customername/mobile/:mobile/addresses/:addresses/customercountry/:customercountry/nationalid/:nationalid', aut_cu_1.aut_cu, cr_cu);
    //Show customer info with id number for customer using get request
    app.get('/customersmenuinfo/id/:id', sh_cu);
    // Show all customers info using get request
    app.get('/customersmenuinfo', sha_cu);
    // Update customer mobile using put request
    app.put('/customersmenuinfo/credentialid/:credentialid/customerinfoid/:id/mobile/:mobile', aut_cu_1.aut_cu, up_cu);
    // Delete customer info with id number for customer using delete request
    app.delete('/customersmenuinfo/credentialid/:credentialid/customerinfoid/:id', aut_cu_1.aut_cu, del_cu);
    // Delete all customers info
    // app.delete('/customersmenuinfo/alldelete/credentialid/:credentialid',aut_cu, del_allcu)
};
exports.default = customersmenuinfo_routes;
//# sourceMappingURL=customersmenuinfo_route.js.map