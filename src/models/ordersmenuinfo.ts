import client from "../database";
export type orderinfo={
    id:Number;
    credentialid:Number;
    orderquantity:Number,
    purchasedate:Date, 
    activeorder:Boolean,
    customerid:Number,
    productid:Number
};
export type add_new_product={
credentialid:Number,
ordercartid:Number,
productid:Number,
productquantity:Number,

};
//Create new order info
async function createorderinfo(
    credentialid:Number,
   // orderquantity:Number,
    purchasedate:Date, 
    activeorder:Boolean,
    customerid:Number,
    ): Promise<orderinfo> {
      try{
      const sql_con= await client.connect();
      
      const sql_create='INSERT INTO "ordersmenuinfo" (credentialid,purchasedate,activeorder,customerid) VALUES ($1,$2,$3,$4) RETURNING *';
      const create_res= await sql_con.query(sql_create,[credentialid,purchasedate,activeorder,customerid]);
      sql_con.release();
      //console.log(create_res.rows[0])
      return create_res.rows[0];
    }catch(e:unknown){
      throw new Error(`Something works wrongly :${e}`)
    }
    }
//Add new product to exist order info
async function add_new_product_to_order(
  //credentialid:Number,
  ordercartid:Number,
  productid:Number,
  productquantity:Number,

  ): Promise<add_new_product> {
    try{
    const sql_con= await client.connect();
    
    const sql_create='INSERT INTO "orderproductscart" (ordercartid,productid,productquantity) VALUES ($1,$2,$3) RETURNING *';
    const createnewpr_res= await sql_con.query(sql_create,[ordercartid,productid,productquantity]);
    sql_con.release();
    //console.log(create_res.rows[0])
    return createnewpr_res.rows[0];
  }catch(e:unknown){
    throw new Error(`Something works wrongly :${e}`)
  }
  }   
  // Show orderproductlist info
  async function showorderproductlist(id:Number): Promise<add_new_product>
  {
   try{
   const sql_con= await client.connect();
   const sql_show='SELECT * FROM "orderproductscart" WHERE id= $1';
   const show_res = await sql_con.query(sql_show,[id]);
   sql_con.release();
   //console.log(show_res.rows[0])
   if (show_res.rowCount === 0) {
     throw new Error("Cannot find products on this order");
   }
   return show_res.rows[0];
 }catch(e:unknown){
     throw new Error(`Something works wrongly :${e}`)
   }
 }


    // Show order info
    async function showorderinfo(id:Number): Promise<orderinfo>
     {
      try{
      const sql_con= await client.connect();
      const sql_show='SELECT * FROM "ordersmenuinfo" WHERE id= $1';
      const show_res = await sql_con.query(sql_show,[id]);
      sql_con.release();
      //console.log(show_res.rows[0])
      if (show_res.rowCount === 0) {
        throw new Error("Cannot find order info");
      }
      return show_res.rows[0];
    }catch(e:unknown){
        throw new Error(`Something works wrongly :${e}`)
      }
    }
    // Show all orders info
    async function showallorderinfo(): Promise<orderinfo>
     {
       try{
      const sql_con = await client.connect();
      const sql_show_all='SELECT * FROM "ordersmenuinfo"';
      const showall_res = await sql_con.query(sql_show_all);
      sql_con.release();
      //console.log(showall_res.rows)
  
      if (showall_res.rowCount === 0) {
        throw new Error("Cannot find any orders info");
      }
      return showall_res.rows;
       }catch(e:unknown){
        throw new Error(`Something works wrongly :${e}`)
      }
      
    }
    
      
    // Delete order info
    

    async function deleteorderinfo(id:number,_credentialid:Number): Promise<orderinfo> {
      try{
        const sql_con= await client.connect();
        const sql_delete='DELETE FROM "ordersmenuinfo" WHERE id=$1 ';
        const delete_res = await sql_con.query(sql_delete,[id]);
        sql_con.release();
        return delete_res;
      }catch(e:unknown){
        throw new Error(`Order info cannot be deleted ${id}:${e}.`)
      }
    }
    
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
}
    export function ordersmenuinfo() {
      return {
        createorderinfo,
        add_new_product_to_order,
        showorderproductlist,
        showorderinfo,
        showallorderinfo,
        //updateorderinfo,
        deleteorderinfo,
        delete_allorderinfo
        };
    }
  