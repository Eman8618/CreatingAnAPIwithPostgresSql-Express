
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
        const res1 = await req.post('/productsmenuinfo/credentialid/16/productname/rice/price/200/category/food/productioncountry/EGYPT'); 

        const res = await req.post('/ordersmenuinfo/credentialid/17/purchasedate/2022-4-10/activeorder/true/customerid/9')
        //Show order info with id number for customer using get request'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for add new product to active order',async()=>{
        //Defining an Endpoint response that posts new product to active order
    const res=await req.post('/orderproductlist/ordercartid/2/productid/3/productquantity/4');
    expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for show products of active order',async()=>{
        const res=await req.get('/orderproductlist/id/2');
        expect(res.status).toBe(200)
    })
    

    it('Getting URL of the API endpoint for show exist order info with id', async () => {
        //Defining an Endpoint response that get the exist order info data of an API 
        const res = await req.get('/ordersmenuinfo/id/1'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    
    it('Getting URL of the API endpoint for show all orders info', async () => {
        //Defining an Endpoint response that get all orders info data of an API 
        const res = await req.get('/ordersmenuinfo'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
   /*
    it('Getting URL of the API endpoint for delete exist order info with id', async () => {
        //Defining an Endpoint response that delete the exist order info data of an API 

        const res = await req.delete('/ordersmenuinfo/credentialid/16/id/2'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })*/
    /*
    it('Getting URL of the API endpoint for delete all products info', async () => {
        //Defining an Endpoint response that delete all orders info data of an API 

        const res = await req.delete('/ordersmenuinfo/alldelete/credentialid/15'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })*/
});
