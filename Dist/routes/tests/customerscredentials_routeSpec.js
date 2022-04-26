"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
// Importing app from index.ts file
const server_1 = __importDefault(require("../../server"));
const customerscredentials_1 = require("../../models/customerscredentials");
const cu_cred = (0, customerscredentials_1.customerscredentials)();
/*
const ne_c=cu_cred.createcustomercredential('eqw@gmail.com','Eman_74','t2yu#');
const ne_c2=cu_cred.createcustomercredential('eqw1@gmail.com','Eman_741','4t2yu#');
*/
// Define request as supertest of app
const req = (0, supertest_1.default)(server_1.default);
// Describe the test
describe('URL Test of REST API as an endpoint responses for customerscredential_route', () => {
    it('Getting URL of the API endpoint for create new customer credential', async () => {
        //Defining an Endpoint response that posts the new customer credential data of an API 
        const res = await req.post('/customerscredentials/email/e@gmail.com/username/Eman345/password_di/yu678');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for authantiction and authorization of exist customer credential', async () => {
        //Defining an Endpoint response that posts for authanication the customer credential data of an API 
        const res = await req.post('/auth/username/Eman345/password_di/yu678');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for show exist customer credential with id', async () => {
        //Defining an Endpoint response that get the exist customer credential data of an API 
        const res = await req.get('/customerscredentials/id/1');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for show exist customer credential with username', async () => {
        //Defining an Endpoint response that get all exist customers credential data of an API 
        const res = await req.get('/customerscredentials/username/Eman345');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for show all customer credential with username', async () => {
        //Defining an Endpoint response that get all customer credential data of an API 
        const res = await req.get('/customerscredentials');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for update exist email for customer  credential', async () => {
        //Defining an Endpoint response that update the exist customer credential data of an API 
        const res = await req.put('/customerscredentials/username/Eman345/password_di/yu678/email/ew@gmail.com');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for update the exist password customer credential', async () => {
        //Defining an Endpoint response that update the exist customer credential data of an API 
        const res = await req.put('/customerscredentials/username/Eman345/password_di/er466/email/ew@gmail.com');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for delete exist customer credential with id', async () => {
        //Defining an Endpoint response that delete the exist customer credential data of an API 
        /*const id1=(await ne_c2).id
        console.log(id1)*/
        // console.log(`/customerscredentials/id/`)
        const res = await req.delete(`/customerscredentials/id/1`);
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    /*
    it('Getting URL of the API endpoint for delete all customers credentials ', async () => {
         console.log(`/customerscredentials/alldelete/credentialid/${Number((await ne_c).id)}`);
        //Defining an Endpoint response that delete all customers credential data of an API
        const res = await req.delete(`/customerscredentials/alldelete/credentialid/${Number((await ne_c).id)}`);
        //Expect results for the test
        expect(res.status).toBe(200);
    })
*/
});
//# sourceMappingURL=customerscredentials_routeSpec.js.map