"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import all routes for customerscredentnails,customersmenuinfo,productsmenuinfo,ordersmenuinfo
const customerscredentials_route_1 = __importDefault(require("./routes/customerscredentials_route"));
const customersmenuinfo_route_1 = __importDefault(require("./routes/customersmenuinfo_route"));
const n_productsmenuinfo_route_1 = __importDefault(require("./routes/n_productsmenuinfo_route"));
const ordersmenuinfo_route_1 = __importDefault(require("./routes/ordersmenuinfo_route"));
var cors = require('cors');
var corsOptions = {
    origin: 'http://172.0.0.1',
    optionsSuccessStatus: 200
};
const app = (0, express_1.default)();
const address = '0.0.0.0:3000';
app.use(body_parser_1.default.json());
app.use(cors(corsOptions));
(0, customersmenuinfo_route_1.default)(app);
(0, customerscredentials_route_1.default)(app);
(0, n_productsmenuinfo_route_1.default)(app);
(0, ordersmenuinfo_route_1.default)(app);
app.get('/', function (req, res) {
    res.send('Server is started up !');
});
// For inducation of the oder come from another domain 
app.get('/ordersmenuinfo/:id', cors(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is order is created from another domain' });
});
app.listen(3000, function () {
    console.log(`starting app on: http://localhost:3000/`);
});
exports.default = app;
//# sourceMappingURL=server.js.map