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
describe('URL Test of REST API as an endpoint responses for customersmenuinfo_route', () => {
    it('Getting URL of the API endpoint for create new customer info', async () => {
        //create customer credential first to can create
        //const res1 = await req.post('/customerscredentials/email/e31t@gmail.com/username/Eman3144/password_di/yu61758'); 
        //Defining an Endpoint response that posts the new customer info data of an API 
        const res = await req.post('/customersmenuinfo/credentialid/14/customername/Eman/mobile/01234678344/addresses/alex-st/customercountry/EGYPT/nationalid/23467');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for show exist customer info with id', async () => {
        //Defining an Endpoint response that get the exist customer info data of an API 
        const res = await req.get('/customersmenuinfo/id/1');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for show all customers info', async () => {
        //Defining an Endpoint response that get all customers info data of an API 
        const res = await req.get('/customersmenuinfo');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for update the exist mobile number for customer info', async () => {
        //Defining an Endpoint response that update the exist mobile number for customer info data of an API 
        const res = await req.put('/customersmenuinfo/credentialid/6/customerinfoid/2/mobile/0156734672');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    it('Getting URL of the API endpoint for delete exist customer info with id', async () => {
        //Defining an Endpoint response that delete the exist customer info data of an API 
        const res = await req.delete('/customersmenuinfo/credentialid/6/customerinfoid/2');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
    /*
    it('Getting URL of the API endpoint for delete all customers info', async () => {
        //Defining an Endpoint response that delete all customers info data of an API
        const res = await req.delete('/customersmenuinfo/alldelete/credentialid/1');
        //Expect results for the test
        expect(res.status).toBe(200);
    })*/
});
//# sourceMappingURL=customersmenuinfo_routeSpec.js.map