CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL, 
    price_range INT NOT NULL CHECK (price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) 
VALUES (123, 'mcdonalds', 'new york', 3);

INSERT INTO restaurants (id, name, location, price_range) 
VALUES (456, 'pizza hut', 'las vegas', 2);

INSERT INTO restaurants (name, location, price_range)
VALUES ('wendys', 'miami', 7);