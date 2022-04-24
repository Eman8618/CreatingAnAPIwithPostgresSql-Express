// Importing supertest 
import supertest from 'supertest';
// Importing app from index.ts file
import app from '../server';
// Define request as supertest of app
const req = supertest(app);
// Describe the test
describe('URL Test of REST API as an endpoint responses', () => {
    it('Getting URL of the API endpoint for localhost', async () => {
        //Defining an Endpoint response that gets the data of an API 
        const res = await req.get('/'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    }
)});