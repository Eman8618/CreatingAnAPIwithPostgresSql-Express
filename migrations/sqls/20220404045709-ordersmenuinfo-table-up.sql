/* Create ordersmenuinfo table*/
CREATE TABLE IF NOT EXISTS ordersmenuinfo(
  id SERIAL PRIMARY KEY,
  credentialid INTEGER REFERENCES customerscredentials(id) NOT NULL,
  purchasedate DATE  NULL, 
  activeorder BOOLEAN NOT NULL,
  customerid INTEGER REFERENCES customersmenuinfo(id)  NULL
);



