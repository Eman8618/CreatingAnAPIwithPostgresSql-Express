/* Create Customersmenuinfo Table */
CREATE TABLE IF NOT EXISTS customersmenuinfo(
  id SERIAL PRIMARY KEY ,
  credentialid INTEGER REFERENCES customerscredentials(id) UNIQUE NULL,
  customername VARCHAR(50) NOT NULL,
  mobile VARCHAR(11) NOT NULL,
  addresses VARCHAR(50) NOT NULL,
  customercountry VARCHAR(50) NOT NULL,
  nationalid VARCHAR(50)  NULL
);

