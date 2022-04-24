/* Create productsmenuinfo Table*/
CREATE TABLE IF NOT EXISTS productsmenuinfo(
  id SERIAL PRIMARY KEY,
  credentialid INTEGER REFERENCES customerscredentials(id)  NULL,
  productname VARCHAR(50) NOT NULL,
  price FLOAT(2) NOT NULL,
  category VARCHAR(50) NOT NULL,
  productioncountry VARCHAR(50) NOT NULL
);