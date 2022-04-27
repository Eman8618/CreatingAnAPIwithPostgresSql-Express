"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsmenuinfo = void 0;
const database_1 = __importDefault(require("../database"));
// Create new product info
async function createproductinfo(credentialid, productname, price, category, productioncountry) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_create = 'INSERT INTO "productsmenuinfo" (credentialid,productname,price,category,productioncountry) VALUES ($1,$2,$3,$4,$5) RETURNING id,productname,price';
        //const sql_create='INSERT INTO "productsmenuinfo" (productname,price,category,productioncountry) VALUES ($1,$2,$3,$4) RETURNING id,productname,price';
        const create_res = await sql_con.query(sql_create, [credentialid, productname, price, category, productioncountry]);
        sql_con.release();
        //console.log(create_res.rows[0])
        return create_res.rows[0];
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// Show product info
async function showproductinfo(id) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_show = 'SELECT * FROM "productsmenuinfo" WHERE id= $1';
        const show_res = await sql_con.query(sql_show, [id]);
        sql_con.release();
        //console.log(show_res.rows[0])
        if (show_res.rowCount === 0) {
            throw new Error("Cannot find product info");
        }
        return show_res.rows[0];
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// Show all products info
async function showallproductinfo() {
    try {
        const sql_con = await database_1.default.connect();
        const sql_show_all = 'SELECT * FROM "productsmenuinfo"';
        const showall_res = await sql_con.query(sql_show_all);
        sql_con.release();
        //console.log(showall_res.rows)
        if (showall_res.rowCount === 0) {
            throw new Error("Cannot find any products info");
        }
        return showall_res.rows;
    }
    catch (e) {
        throw new Error(`Something works wrongly :${e}`);
    }
}
// update product price for product 
async function updateproductinfo(id, credentialid, ne_prdprice) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_update = 'UPDATE "productsmenuinfo" SET price=$2 WHERE id = $1 RETURNING *';
        const update_res = await sql_con.query(sql_update, [id, ne_prdprice]);
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
// Delete product info 
async function deleteproductinfo(id, _credentialid) {
    try {
        const sql_con = await database_1.default.connect();
        const sql_delete = 'DELETE FROM "productsmenuinfo" WHERE id=$1';
        const delete_res = await sql_con.query(sql_delete, [id]);
        sql_con.release();
        return delete_res;
    }
    catch (e) {
        throw new Error(`Customer info cannot be deleted ${id}:${e}.`);
    }
}
/*
// Delete all products info
async function delete_allproductinfo(_credentialid:Number): Promise<productinfo> {
  try{
    const sql_con= await client.connect();
    const sql_delete_all='DELETE  FROM "productsmenuinfo" ';
    const delete_res = await sql_con.query(sql_delete_all);
    sql_con.release();
    return delete_res;
  }catch(e:unknown){
    throw new Error(`Customer cannot be deleted all products info.${e}`)
  }
}*/
function productsmenuinfo() {
    return {
        createproductinfo,
        showproductinfo,
        updateproductinfo,
        showallproductinfo,
        deleteproductinfo
        //  delete_allproductinfo    
    };
}
exports.productsmenuinfo = productsmenuinfo;
//# sourceMappingURL=n_productsmenuinfo.js.map