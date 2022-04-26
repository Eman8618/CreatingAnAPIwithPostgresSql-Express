"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing supertest 
const supertest_1 = __importDefault(require("supertest"));
// Importing app from index.ts file
const server_1 = __importDefault(require("../../server"));
// Define request as supertest of app
const req = (0, supertest_1.default)(server_1.default);
// Describe the test
describe('URL Test of REST API as an endpoint responses for ordersmenuinfo_route', () => {
    it('Getting URL of the API endpoint for create new orders info', async () => {
        //Defining an Endpoint response that posts the new order info data of an API 
        const res1 = await req.post('/productsmenuinfo/credentialid/16/productname/rice/price/200/category/food/productioncountry/EGYPT');
        const res = await req.post('/ordersmenuinfo/credentialid/17/orderquantity/3/purchasedate/2022-4-10/activeorder/true/customerid/9/productid/10');
        //Show order info with id number for customer using get request'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for show exist order info with id', async () => {
        //Defining an Endpoint response that get the exist order info data of an API 
        const res = await req.get('/ordersmenuinfo/id/1');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for show all orders info', async () => {
        //Defining an Endpoint response that get all orders info data of an API 
        const res = await req.get('/ordersmenuinfo');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for update the exist quantity number for order info', async () => {
        //Defining an Endpoint response that update the exist quantity number for order info data of an API 
        const res = await req.put('/ordersmenuinfo/credentialid/16/orderid/2/orderquantity/12');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for delete exist order info with id', async () => {
        //Defining an Endpoint response that delete the exist order info data of an API 
        const res = await req.delete('/ordersmenuinfo/credentialid/16/orderid/2');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    /*
    it('Getting URL of the API endpoint for delete all products info', async () => {
        //Defining an Endpoint response that delete all orders info data of an API

        const res = await req.delete('/ordersmenuinfo/alldelete/credentialid/21');
        //Expect results for the test
        expect(res.status).toBe(200);
    })*/
});
//# sourceMappingURL=ordersmenuinfo_routeSpec.js.map