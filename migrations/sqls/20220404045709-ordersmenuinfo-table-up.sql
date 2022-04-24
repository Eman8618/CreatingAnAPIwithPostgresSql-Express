/* Create ordersmenuinfo table*/
CREATE TABLE IF NOT EXISTS ordersmenuinfo(
  id SERIAL PRIMARY KEY,
  credentialid INTEGER REFERENCES customerscredentials(id)  NULL,
  orderquantity NUMERIC(12) NOT NULL,
  purchasedate DATE  NULL, 
  activeorder BOOLEAN NOT NULL,
  customerid INTEGER REFERENCES customersmenuinfo(id)  NULL,
  productid  INTEGER REFERENCES productsmenuinfo(id)  NULL
);



