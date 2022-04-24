
// Importing supertest 
import supertest from 'supertest';
// Importing app from index.ts file
import app from "../../server"
// Define request as supertest of app
const req = supertest(app);
// Describe the test
describe('URL Test of REST API as an endpoint responses for ordersmenuinfo_route', () => {
    it('Getting URL of the API endpoint for create new orders info', async () => {
        //Defining an Endpoint response that posts the new order info data of an API 
        const res1 = await req.post('/productsmenuinfo/credentialid/17/productname/rice/price/200/category/food/productioncountry/EGYPT'); 

        const res = await req.post('/ordersmenuinfo/credentialid/21/orderquantity/3/purchasedate/2022-4-10/activeorder/true/customerid/9/productid/10')
        //Show order info with id number for customer using get request'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    
    it('Getting URL of the API endpoint for show exist order info with id', async () => {
        //Defining an Endpoint response that get the exist order info data of an API 
        const res = await req.get('/ordersmenuinfo/id/1'); 
        const res1 = await req.get('/ordersmenuinfo'); 
        const res_b=(res.status&&res1.status)
        //Expect results for the test
        expect(res_b).toBe(200);
    })
    
    it('Getting URL of the API endpoint for show all orders info', async () => {
        //Defining an Endpoint response that get all orders info data of an API 
        const res = await req.get('/ordersmenuinfo'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })


    it('Getting URL of the API endpoint for update the exist quantity number for order info', async () => {
        //Defining an Endpoint response that update the exist quantity number for order info data of an API 
        
        const res = await req.put('/ordersmenuinfo/credentialid/21/orderid/5/orderquantity/6'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for delete exist product info with id', async () => {
        //Defining an Endpoint response that delete the exist order info data of an API 

        const res = await req.delete('/ordersmenuinfo/credentialid/21/orderid/5'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    /*
    it('Getting URL of the API endpoint for delete all products info', async () => {
        //Defining an Endpoint response that delete all orders info data of an API 

        const res = await req.delete('/ordersmenuinfo/alldelete/credentialid/21'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })*/
});