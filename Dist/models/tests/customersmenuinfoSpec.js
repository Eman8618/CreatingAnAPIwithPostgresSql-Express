"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customersmenuinfo_1 = require("../customersmenuinfo");
const customerscredentials_1 = require("../customerscredentials");
const cus_cred = (0, customerscredentials_1.customerscredentials)();
const cusinfo = (0, customersmenuinfo_1.customersmenuinfo)();
describe('Customers Menu Info  Model', () => {
    // Create new customer info
    it('New Customer Info Is Created', async () => {
        const cus_1 = await cus_cred.createcustomercredential('ey@gmailcom', 'Emant1', 'prye234');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        expect(cr_cu.customername).toBe('Eman11');
    });
    // Show customer info
    it('Show Customer Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('ewe@gmailcom', 'Eman1w', 'pre23rt4');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        const sh_cu = cusinfo.showcustomerinfo(Number(cr_cu.id));
        expect(sh_cu).toBeDefined();
    });
    // Show all customers info
    it('Show ALL Customers Info', async () => {
        const cus_2 = await cus_cred.createcustomercredential('e1@gmailcom', 'Eman2', 'pre244');
        await cusinfo.createcustomerinfo(Number(cus_2.id), 'Eman2', '0154567678', 'alex2-st', 'Egypt', '12346783012343');
        const sha_cu = await cusinfo.showallcustomerinfo();
        expect(sha_cu).toBeDefined();
    });
    // Update mobile for customer  
    it('Update Customer Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('e@gmailcom', 'Eman161', 'p8re234');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        const up_cu = await cusinfo.updatecustomerinfo(cr_cu.id, cus_1.id, '0128074632');
        expect(up_cu.mobile).toEqual('0128074632');
    });
    // Delete customer info
    it('Delete Customer Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('rqe@gmailcom', 'Eman1r1', 'rpre234');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        const de_cu1 = await cusinfo.deletecustomerinfo(Number(cr_cu.id), Number(cus_1.id));
        expect(de_cu1).toBeDefined();
    });
    /* // Delete all
    it('Delete Customer Info',async()=>{
      const cus_1=await cus_cred.createcustomercredential('reqe@gmailcom','Eman1r11','rpr2e234');

      const de_cu1=await cusinfo.delete_allcustomerinfo(cus_1.id);
      //const de_cu2=await cus_cred.delete_allcustomercredential(cus_1.id);

      expect(de_cu1).toBeDefined()
       })
*/
});
//# sourceMappingURL=customersmenuinfoSpec.js.map