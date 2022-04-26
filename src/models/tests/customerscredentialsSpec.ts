//Test for customerscredentials model 
//import customerscredentials function which contain the following 5 functions:
const bcrypt=require("bcrypt")
const pepper=require("salt")
  
import {customerscredentials} from "../customerscredentials"; 
const cuscred=customerscredentials();
describe('Customer Credentials Model',()=>{
   
    // Create new customer credential
    it('New Customer Credential Is Created',async()=>{
        const cr_cucr=await cuscred.createcustomercredential('e1@gmail.com','Eman','pas12o3e');
        expect(cr_cucr.username).toBe('Eman');        
    })
    
    // Show customer credential with username
    it('Show Customer Credential with username',async()=>{
        const cr_cucr=await cuscred.showcustomercredentail('Eman');
        expect(cr_cucr).toBeDefined();
    })
    // Show customer credential with id
    it('Show Customer Credential with ID',async()=>{
        const cr_cuc=await cuscred.createcustomercredential('e1er@gmail.com','Emanw','rpas12u3e');
        const cu_idsh=await cuscred.id_showcustomercredentail(Number(cr_cuc.id));
        expect(cu_idsh).toBeDefined();
    })
    
    // Show all customer credential
    it('Show ALL Customers Credentials',async()=>{
        const cr_cucr=await cuscred.showallcustomercredentail();
        expect(cr_cucr).toBeDefined();

        })
        // Update customer credential email
    it('Update Customer Credential Email',async()=>{
        const cr_cucr=await cuscred.updatecustomercredentailemail('Eman','e3@gmail.com');
        expect(cr_cucr.email).toBe('e3@gmail.com')
        })
   
        
    // Update customer credential password 
    it('Update Customer Credential Password',async()=>{
        const cr_cucr=await cuscred.updatecustomercredentailpassword('Eman','er2344');
        expect(true).toEqual(bcrypt.compareSync('er2344'+pepper,cr_cucr.password_di)) 
        })
    // Delete customer credential 
    it('Delete Customer Credential',async()=>{
        const cr_cucr=await cuscred.createcustomercredential('ee1@gmail.com','Emane','pas1236e');
        const de_cu1=await cuscred.deletecustomercredential(Number(cr_cucr.id));
          expect(de_cu1).toBeDefined();
        })
        /*
  // Delete all customers credentials 
    it('Delete  All Customers Credentials',async()=>{
        const cr_cucr=await cuscred.createcustomercredential('ee21@gmail.com','Emane3','ptas1236e');

        const de_cu1=await cuscred.delete_allcustomercredential(cr_cucr.id);
          expect(de_cu1).toBeDefined();
        })
        const cr_cuc=async()=>{await cuscred.createcustomercredential('e1er@gmail.com','Emanw','rpas12u3e');
    }*/


})