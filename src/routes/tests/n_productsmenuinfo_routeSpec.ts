
// Importing supertest 
import supertest from 'supertest';
// Importing app from index.ts file
import app from "../../server"
// Define request as supertest of app
const req = supertest(app);


// Describe the test
describe('URL Test of REST API as an endpoint responses for productsmenuinfo_route', () => {
     
    it('Getting URL of the API endpoint for create new product info', async () => {
        //create customer credential first to can create
         const res1 = await req.post('/customerscredentials/email/e31tt@gmail.com/username/Eman31744/password_di/yu61758'); 
        //Defining an Endpoint response that posts the new product info data of an API 
        const res = await req.post('/productsmenuinfo/credentialid/17/productname/rice/price/200/category/food/productioncountry/EGYPT'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    
    it('Getting URL of the API endpoint for show exist product info with id', async () => {
        //Defining an Endpoint response that get the exist product info data of an API 
        const res = await req.get('/productsmenuinfo/id/4'); 
        const res1 = await req.get('/productsmenuinfo'); 
          const res_b=(res.status&&res1.status)
         // console.log(res_b)
        //Expect results for the test
        expect(res_b).toBe(200);
    })
    
    it('Getting URL of the API endpoint for show all products info', async () => {
        //Defining an Endpoint response that get all poducts info data of an API 
        const res = await req.get('/productsmenuinfo'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for update the exist price number for product info', async () => {
        //Defining an Endpoint response that update the exist price number for product info data of an API 
        const res = await req.put('/productsmenuinfo/credentialid/17/productinfoid/10/price/400'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for delete exist product info with id', async () => {
        //Defining an Endpoint response that delete the exist product info data of an API 

        const res = await req.delete('/productsmenuinfo/credentialid/17/productinfoid/6'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    /*
    it('Getting URL of the API endpoint for delete all products', async () => {
        //Defining an Endpoint response that delete all products info data of an API 

        const res = await req.delete('/productsmenuinfo/alldelete/credentialid/17'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })*/
});
