"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aut_cu_1 = require("../middleware/aut_cu");
const ordersmenuinfo_1 = require("../models/ordersmenuinfo");
const or_info = (0, ordersmenuinfo_1.ordersmenuinfo)();
// To  can insert dates into tables
const pd = require('postgres-date');
// Create New Order 
const cr_or = async (req, res) => {
    try {
        // Definition of all parameters that is needed for create new order function
        const id = req.params.id;
        //const orderquantity=req.params.orderquantity;
        const purchasedate = new Date(req.params.purchasedate);
        const activeorder = req.params.activeorder;
        const customerid = req.params.customerid;
        //const productid=req.params.productid;
        const credentialid = req.params.credentialid;
        // Create new order 
        const ne_or = await or_info.createorderinfo(Number(credentialid), (purchasedate), Boolean(activeorder), Number(customerid));
        res.json(ne_or);
    }
    catch (e) {
        res.sendStatus(400); //Bad Request
        console.log(`${e}`);
    }
};
//
// Create New Product to an active order 
const crnewpro_or = async (req, res) => {
    const ordercartid = req.params.ordercartid;
    // Check if order is exist and active
    try {
        const or_existance = await or_info.showorderinfo(Number(ordercartid));
        if (or_existance.activeorder === true) {
            //try{
            // Definition of all parameters that is needed for adding new product to order function
            const id = req.params.id;
            // const credentialid=req.params.credentialid;
            const productid = req.params.productid;
            const productquantity = req.params.productquantity;
            // Add  new product to active order 
            const nepr_or = await or_info.add_new_product_to_order(Number(ordercartid), Number(productid), Number(productquantity));
            res.json(nepr_or);
        }
        else {
            throw new Error('Cannot add product ,sorry order is inactive order');
        }
    }
    catch (e) {
        res.sendStatus(404); //Not Found
        console.log(`${e}`);
    }
};
//
// Show a orderproductlist with id of orderproduct
const sh_orprlist = async (req, res) => {
    try {
        const or_id = req.params.id;
        const or_s = await or_info.showorderproductlist(Number(or_id));
        res.json(or_s);
    }
    catch (e) {
        res.sendStatus(404);
        // console.log(`${e}`)
        // Not Found
    }
};
// Show a order info with id 
const sh_or = async (req, res) => {
    try {
        const or_id = req.params.id;
        const or_s = await or_info.showorderinfo(Number(or_id));
        res.json(or_s);
    }
    catch (e) {
        res.sendStatus(404);
        // console.log(`${e}`)
        // Not Found
    }
};
// Show all orders info
const sha_or = async (req, res) => {
    try {
        const or_a = await or_info.showallorderinfo();
        res.json(or_a);
    }
    catch (e) {
        res.sendStatus(404);
        //console.log(`${e}`)
        // Not Found
    }
};
// Delete Order with id 
const del_or = async (req, res) => {
    try {
        const or_id = req.params.id;
        const credentialid = req.params.credentialid;
        //console.log(or_id)
        //console.log(credentialid)
        const cus_d = await or_info.deleteorderinfo(Number(or_id), Number(credentialid));
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
}*/
const ordersmenuinfo_routes = (app) => {
    // Create new order with post request
    app.post('/ordersmenuinfo/credentialid/:credentialid/purchasedate/:purchasedate/activeorder/:activeorder/customerid/:customerid', aut_cu_1.aut_cu, cr_or);
    // Add new product to active order
    app.post('/orderproductlist/ordercartid/:ordercartid/productid/:productid/productquantity/:productquantity', crnewpro_or);
    // Show order product list for active order using get request
    app.get('/orderproductlist/id/:id', sh_orprlist);
    //Show order info with id number for customer using get request
    app.get('/ordersmenuinfo/id/:id', sh_or);
    // Show all orders info using get request
    app.get('/ordersmenuinfo', sha_or);
    // Delete order info with id number for order using delete request
    app.delete('/ordersmenuinfo/credentialid/:credentialid/id/:id', aut_cu_1.aut_cu, del_or);
    //app.delete('/ordersmenuinfo/alldelete/credentialid/:credentialid',aut_cu, del_allor)
};
exports.default = ordersmenuinfo_routes;
//# sourceMappingURL=ordersmenuinfo_route.js.map