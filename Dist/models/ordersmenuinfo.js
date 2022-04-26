"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersmenuinfo = void 0;
const database_1 = __importDefault(require("../database"));
//Create new order info
async function createorderinfo(credentialid, orderquantity, purchasedate, activeorder, customerid, productid) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_create = 'INSERT INTO "ordersmenuinfo" (credentialid,orderquantity,purchasedate,activeorder,customerid,productid) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id,customerid,productid ,purchasedate';
        const create_res = await sql_con.query(sql_create, [credentialid, orderquantity, purchasedate, activeorder, customerid, productid]);
        sql_con.release();
        //console.log(create_res.rows[0])
        return create_res.rows[0];
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// Show order info
async function showorderinfo(id) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_show = 'SELECT * FROM "ordersmenuinfo" WHERE id= $1';
        const show_res = await sql_con.query(sql_show, [id]);
        sql_con.release();
        //console.log(show_res.rows[0])
        if (show_res.rowCount === 0) {
            throw new Error("Cannot find order info");
        }
        return show_res.rows[0];
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// Show all orders info
async function showallorderinfo() {
    try {
        const sql_con = await database_1.default.connect();
        const sql_show_all = 'SELECT * FROM "ordersmenuinfo"';
        const showall_res = await sql_con.query(sql_show_all);
        sql_con.release();
        //console.log(showall_res.rows)
        if (showall_res.rowCount === 0) {
            throw new Error("Cannot find any orders info");
        }
        return showall_res.rows;
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// update order quantity for order info 
async function updateorderinfo(id, _credentialid, ne_orqu) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_update = 'UPDATE "ordersmenuinfo" SET orderquantity=$2 WHERE id = $1 RETURNING *';
        const update_res = await sql_con.query(sql_update, [id, ne_orqu]);
        sql_con.release();
        //console.log(update_res.rows[0])
        if (update_res.rowCount === 0) {
            throw new Error(`Customer info cannot be updated price for product with ${id} `);
        }
        return update_res.rows[0];
    }
    catch (error) {
        throw new Error(`Something works wrongly :${error}`);
    }
}
// Delete order info 
async function deleteorderinfo(id, _credentialid) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_delete = 'DELETE FROM "ordersmenuinfo" WHERE id=$1 ';
        const delete_res = await sql_con.query(sql_delete, [id]);
        sql_con.release();
        return delete_res;
    }
    catch (e) {
        throw new Error(`Order info cannot be deleted ${id}:${e}.`);
    }
}
/*
 // Delete all
async function delete_allorderinfo(_credentialid:Number): Promise<orderinfo> {
try{
const sql_con= await client.connect();
const sql_delete_all='DELETE FROM "ordersmenuinfo" ';
const delete_res = await sql_con.query(sql_delete_all);
sql_con.release();
return delete_res;
}catch(e:unknown){
throw new Error(`Customer cannot be deleted all orders info.${e}`)
}
}*/
function ordersmenuinfo() {
    return {
        createorderinfo,
        showorderinfo,
        showallorderinfo,
        updateorderinfo,
        deleteorderinfo,
        //   delete_allorderinfo
    };
}
exports.ordersmenuinfo = ordersmenuinfo;
//# sourceMappingURL=ordersmenuinfo.js.map