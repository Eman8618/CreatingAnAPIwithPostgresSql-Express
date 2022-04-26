"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersmenuinfo = void 0;
const database_1 = __importDefault(require("../database"));
// Create new customer info
async function createcustomerinfo(credentialid, customername, mobile, addresses, customercountry, nationalid) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_create = 'INSERT INTO "customersmenuinfo" (credentialid,customername,mobile,addresses,customercountry,nationalid) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, credentialid,customername,mobile';
        const create_res = await sql_con.query(sql_create, [credentialid, customername, mobile, addresses, customercountry, nationalid]);
        sql_con.release();
        //console.log(create_res.rows[0])
        return create_res.rows[0];
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// Show customer info
async function showcustomerinfo(id) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_show = 'SELECT * FROM "customersmenuinfo" WHERE id= $1';
        const show_res = await sql_con.query(sql_show, [id]);
        sql_con.release();
        //console.log(show_res.rows[0])
        if (show_res.rowCount === 0) {
            throw new Error("Cannot find customer info");
        }
        return show_res.rows[0];
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// Show all customers info
async function showallcustomerinfo() {
    try {
        const sql_con = await database_1.default.connect();
        const sql_show_all = 'SELECT * FROM "customersmenuinfo"';
        const showall_res = await sql_con.query(sql_show_all);
        sql_con.release();
        //console.log(showall_res.rows);
        if (showall_res.rowCount === 0) {
            throw new Error("Cannot find any customer info");
        }
        return showall_res.rows;
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// update mobile for customer 
async function updatecustomerinfo(id, _credentialid, new_mob) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_update = 'UPDATE "customersmenuinfo" SET mobile=$2 WHERE id = $1 RETURNING *';
        const update_res = await sql_con.query(sql_update, [id, new_mob]);
        sql_con.release();
        //console.log(update_res.rows[0])
        if (update_res.rowCount === 0) {
            throw new Error(`Customer info cannot be updated mobile for ${id} `);
        }
        return update_res.rows[0];
    }
    catch (error) {
        throw new Error(`Something works wrongly :${error}`);
    }
}
async function deletecustomerinfo(id, _credentialid) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_delete = 'DELETE FROM "customersmenuinfo" WHERE id=$1';
        const delete_res = await sql_con.query(sql_delete, [id]);
        sql_con.release();
        return delete_res;
    }
    catch (e) {
        throw new Error(`Customer info cannot be deleted ${id}:${e}.`);
    }
}
// Delete all
async function delete_allcustomerinfo(_credentialid) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_delete_all = 'DELETE FROM "customersmenuinfo" ';
        const delete_res = await sql_con.query(sql_delete_all);
        sql_con.release();
        return delete_res;
    }
    catch (e) {
        throw new Error(`Customer cannot be deleted all customers info.${e}`);
    }
}
function customersmenuinfo() {
    return {
        createcustomerinfo,
        showcustomerinfo,
        showallcustomerinfo,
        updatecustomerinfo,
        deletecustomerinfo,
        delete_allcustomerinfo
    };
}
exports.customersmenuinfo = customersmenuinfo;
//# sourceMappingURL=customersmenuinfo.js.map