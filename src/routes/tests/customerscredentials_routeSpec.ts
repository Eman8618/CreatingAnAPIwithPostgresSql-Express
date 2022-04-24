// Importing supertest 
import { randomInt } from 'crypto';
import supertest from 'supertest';
// Importing app from index.ts file
import app from "../../server"
// Define request as supertest of app
const req = supertest(app);

// Describe the test
describe('URL Test of REST API as an endpoint responses for customerscredential_route', () => {
    it('Getting URL of the API endpoint for create new customer credential', async () => {
        //Defining an Endpoint response that posts the new customer credential data of an API 
        const res = await req.post('/customerscredentials/email/e@gmail.com/username/Eman345/password_di/yu678') 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for authantiction and authorization of exist customer credential', async () => {
        //Defining an Endpoint response that posts for authanication the customer credential data of an API 
        const res1 = await req.post('/customerscredentials/email/e417@gmail.com/username/Eman350/password_di/yu7833') 

        const res = await req.post('/auth/username/Eman/password_di/er2344')
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for show exist customer credential with id', async () => {
        //Defining an Endpoint response that get the exist customer credential data of an API 
        const res = await req.get('/customerscredentials/id/21'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    
    it('Getting URL of the API endpoint for show exist customer credential with username', async () => {
        //Defining an Endpoint response that get all exist customers credential data of an API 
        const res = await req.get('/customerscredentials/username/Eman345'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for show all customer credential with username', async () => {
        //Defining an Endpoint response that get all customer credential data of an API 
        const res = await req.get('/customerscredentials'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })


    it('Getting URL of the API endpoint for update exist email for customer  credential', async () => {
        //Defining an Endpoint response that update the exist customer credential data of an API 
        
            const res = await req.put('/customerscredentials/username/Eman345/email/ew@gmail.com');
            //Expect results for the test
         expect(res.status).toBe(200);
       
    })
    it('Getting URL of the API endpoint for update the exist password customer credential', async () => {
        //Defining an Endpoint response that update the exist customer credential data of an API 
        const res = await req.put('/customerscredentials/username/Eman345/password_di/er466'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    it('Getting URL of the API endpoint for delete exist customer credential with id', async () => {
        //Defining an Endpoint response that delete the exist customer credential data of an API 
        const res = await req.delete('/customerscredentials/id/13'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })
    /*
    it('Getting URL of the API endpoint for delete all customers credentials ', async () => {

        //Defining an Endpoint response that delete all customers credential data of an API 
        const res = await req.delete('/customerscredentials/alldelete/credentialid/20'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    })*/


});