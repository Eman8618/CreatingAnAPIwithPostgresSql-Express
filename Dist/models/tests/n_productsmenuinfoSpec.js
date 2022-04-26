"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_productsmenuinfo_1 = require("../n_productsmenuinfo");
const customerscredentials_1 = require("../customerscredentials");
const cus_cred = (0, customerscredentials_1.customerscredentials)();
const proinfo = (0, n_productsmenuinfo_1.productsmenuinfo)();
// To  can insert dates into tables
const pd = require('postgres-date');
describe('Products Menu Info  Model', () => {
    /*beforeAll(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 200 * 1000;
  });*/
    // Create new customer info
    it('New Product Info Is Created', async () => {
        const cus_1 = await cus_cred.createcustomercredential('e142@gmailcom', 'Eman14', 'pre2314');
        const cr_pro = await proinfo.createproductinfo(cus_1.id, 'Rice', parseFloat('30.55'), 'Food', 'Egypt');
        expect(cr_pro.productname).toBe('Rice');
        // console.log(cr_pro.id)
    });
    // Show product info
    it('Show product Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('e15@gmailcom', 'Eman15', '2234');
        const cr_pro = await proinfo.createproductinfo(cus_1.id, 'Rice', parseFloat('30.55'), 'Food', 'Egypt');
        const sh_pro = proinfo.showproductinfo(cr_pro.id);
        expect(sh_pro).toBeDefined();
    });
    // Show all products info
    it('Show ALL products Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('e16@gmailcom', 'Eman16', 'pre0234');
        const cr_pro = await proinfo.createproductinfo(cus_1.id, 'Rice', parseFloat('30.55'), 'Food', 'Egypt');
        const sha_pro = await proinfo.showallproductinfo();
        expect(sha_pro).toBeDefined();
    });
    // Update price for product for increasing price
    it('Update Product Info for price', async () => {
        const cus_1 = await cus_cred.createcustomercredential('e17@gmailcom', 'Eman17', 'p8re234');
        const cr_pro = await proinfo.createproductinfo(cus_1.id, 'Rice', parseFloat('30.55'), 'Food', 'Egypt');
        const pri = 1768.55;
        const up_pro = await proinfo.updateproductinfo(cr_pro.id, cus_1.id, pri);
        expect(up_pro.price).toBeGreaterThanOrEqual(pri);
    });
    // Delete product info
    it('Delete product Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('18e@gmailcom', 'Eman18', 'pre2304');
        const cr_pro = await proinfo.createproductinfo(cus_1.id, 'Rice', parseFloat('30.55'), 'Food', 'Egypt');
        const de_pro1 = await proinfo.deleteproductinfo(Number(cr_pro.id), cus_1.id);
        expect(de_pro1).toBeDefined();
    });
    // Delete all products info
    /*   it('Delete all product Info',async()=>{
         const cus_1=await cus_cred.createcustomercredential('18e4@gmailcom','Eman178','pre23046');
 
           //const de_or1=await ord_info.delete_allorderinfo(cus_1.id);
           const de_pro1=await proinfo.delete_allproductinfo(cus_1.id);
           //const de_cu3=await cus_cred.delete_allcustomercredential(cus_1.id);
 
           expect(de_pro1).toBeDefined();
            })*/
});
//# sourceMappingURL=n_productsmenuinfoSpec.js.map