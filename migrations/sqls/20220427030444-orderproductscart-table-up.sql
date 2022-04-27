/* Create orderproductscart table*/
CREATE TABLE IF NOT EXISTS orderproductscart(
  id SERIAL PRIMARY KEY,
  credentialid INTEGER REFERENCES customerscredentials(id)  NULL,
  ordercartid  INTEGER REFERENCES ordersmenuinfo(id) NOT NULL,
  productid  INTEGER REFERENCES productsmenuinfo(id)  NOT NULL,
  productquantity NUMERIC(12) NOT NULL
);
