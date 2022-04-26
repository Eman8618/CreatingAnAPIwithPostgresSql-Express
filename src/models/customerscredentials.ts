import client from "../database";
const bcrypt=require("bcrypt")
const pepper=require("salt")

export type customercredential={
    id :Number;
    email:String;
    username:String;
    password_di:String};

     
// Create new customer credential 
async function createcustomercredential(email:string,username: string,password_di: string
): Promise<customercredential> {
  try{
  const sql_con= await client.connect();
  const sql_create='INSERT INTO "customerscredentials" (email,username,password_di) VALUES ($1,$2,$3) RETURNING id,username';
  const h_Ps= bcrypt.hashSync(password_di+ pepper, Number(process.env.SALT_ROUNDS));
  //console.log(pepper);
  
  const create_res= await sql_con.query(sql_create,[email,username,h_Ps]);
  sql_con.release();
  //console.log(create_res.rows[0])
  return create_res.rows[0];
}catch(e:unknown){
  throw new Error('Something works wrongly'+`${e}`)
}
}
// Authentication for existing user and customer give the only the id
async function Aut_fun(username:string,password_di:string): Promise<customercredential>{
try{
  const sql_con= await client.connect();
  const sql_show='SELECT password_di FROM "customerscredentials" WHERE username = $1';
  const sh_res= await sql_con.query(sql_show,[username]);
  //console.log(password_di)

  if(sh_res.rows.rowCount!==0){
    const customercredential=sh_res.rows[0];
     //console.log(password_di)
     //console.log(customercredential.password_di)
    //console.log(password_di===sh_res.rows[0].password_di)

   if(password_di===sh_res.rows[0].password_di){
    //console.log(customercredential)
     
      return customercredential;
    }// Authentication for existing user and customer give username and password 

    else if(bcrypt.compareSync(password_di+pepper,customercredential.password_di)){
      return customercredential;

    }else {
      throw new Error('Invalid Authorization password');
    }
  } else {
    throw new Error('Invalid Authorization username please be sure that you already signed up before');
  }  
  }catch(e){

    throw new Error('Invalid Authorization'+`${e}`)
}
}

// Show customer credential
async function showcustomercredentail(username: string): Promise<customercredential>
 {
  try{
  const sql_con= await client.connect();
  const sql_show='SELECT * FROM "customerscredentials" WHERE username = $1';
  const show_res = await sql_con.query(sql_show,[username]);
  sql_con.release();
 // console.log(show_res)
  if (show_res.rowCount===0) {
    throw new Error("Cannot find customer credential");
  }
  return show_res.rows[0];
}catch(e:unknown){
    throw new Error(`Something works wrongly+${e}`)
  }
}
// Show customer credential with id
async function id_showcustomercredentail(id:number): Promise<customercredential>
{
 try{
 const sql_con= await client.connect();
 const sql_showid='SELECT * FROM "customerscredentials" WHERE id= $1';
const show_res = await sql_con.query(sql_showid,[id]);
 sql_con.release();
// console.log(show_res)
 if (show_res.rowCount===0) {
   throw new Error("Cannot find customer credential");
 }
 return show_res.rows[0];
}catch(e:unknown){
   throw new Error(`Something works wrongly+${e}`)

}
}

// Show all customers credentials
async function showallcustomercredentail(): Promise<customercredential>
 {
   try{
  const sql_con = await client.connect()
  const sql_show_all='SELECT * FROM "customerscredentials"';
  const showall_res = await sql_con.query(sql_show_all);
  sql_con.release()
  if (showall_res.rowCount === 0) {
    throw new Error("Cannot find any customer credential");
  }
  //console.log(showall_res.rows)
  return showall_res.rows;
   }catch(e:unknown){
    throw new Error('Something works wrongly')
  }
  
}
// Update email of customer credentil 
async function updatecustomercredentailemail(username: string,newemail:string): Promise<customercredential>
 {
  

  try{
  const sql_con= await client.connect();
  const sql_update='UPDATE "customerscredentials" SET email=$2 WHERE username = $1 RETURNING id,username,email';
  const update_res = await sql_con.query(sql_update,[username,newemail]);
  sql_con.release();
 // console.log(update_res.rows[0])
if (update_res.rowCount === 0) {
  throw new Error(`Customer credential cannot be updates password for ${username} `);
}
//console.log(update_res.rows[0])
return update_res.rows[0];
}catch(e:unknown){
    throw new Error('Something works wrongly'+`${e}`)
  }
}
 



 

// Update Password for customer credential
async function updatecustomercredentailpassword(username: string,newps:string): Promise<customercredential>
 {
  try{
  const sql_con= await client.connect();
  const sql_update='UPDATE "customerscredentials" SET password_di=$2 WHERE username = $1 RETURNING id,username,password_di';
  const h_Ps= bcrypt.hashSync(newps+ pepper, Number(process.env.SALT_ROUNDS));
  const update_res = await sql_con.query(sql_update,[username,h_Ps]);
  sql_con.release();
  if (update_res.rowCount === 0) {
    throw new Error(`Customer credential cannot be updates password for ${username} `);
  }
  //console.log(update_res.rows[0])
  return update_res.rows[0];
}catch(e:unknown){
    throw new Error('Something works wrongly'+`${e}`)
  }
}



async function deletecustomercredential(id:number): Promise<customercredential> {
  try{
    const sql_con= await client.connect();
    const sql_delete='DELETE FROM "customerscredentials" WHERE id=$1';
    const delete_res = await sql_con.query(sql_delete,[id]);
    sql_con.release();
    return delete_res;
  }catch(e:unknown){
    throw new Error(`Customer cannot be deleted ${id}.${e}`)
  }
}
// Delete all
async function delete_allcustomercredential(_id:Number): Promise<customercredential> {
  try{
    const sql_con= await client.connect();
    const sql_delete_all='DELETE  FROM "customerscredentials" ';
    const delete_res = await sql_con.query(sql_delete_all);
    sql_con.release();
    return delete_res;
  }catch(e:unknown){
    throw new Error(`Customer cannot be deleted all customers credential.${e}`)
  }
}


export function customerscredentials() {
  return {
    createcustomercredential,
    Aut_fun,// Authentiction when given only customer credential id or give user name and password
    showcustomercredentail,
    id_showcustomercredentail,
    showallcustomercredentail,
    updatecustomercredentailemail,
    updatecustomercredentailpassword,
    deletecustomercredential,
    delete_allcustomercredential
    };
}