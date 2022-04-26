"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing supertest 
const supertest_1 = __importDefault(require("supertest"));
// Importing app from index.ts file
const server_1 = __importDefault(require("../server"));
// Define request as supertest of app
const req = (0, supertest_1.default)(server_1.default);
// Describe the test
describe('URL Test of REST API as an endpoint responses', () => {
    it('Getting URL of the API endpoint for localhost', async () => {
        //Defining an Endpoint response that gets the data of an API 
        const res = await req.get('/');
        //Expect results for the test
        expect(res.status).toBe(200);
    });
});
//# sourceMappingURL=serverSpec.js.map