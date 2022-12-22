/**
 * This is the backend server that uses express for CRUD operations
 */
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();
const cors = require("cors");

app.use(cors());
app.use((express.json()));

//Gets All Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants');
        res.status(200).json ({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    } catch(err) {
        res.status(500).json ({
            status: "fail"
        });
        console.log(err);
    }
});

//Gets 1 Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(`SELECT * FROM restaurants WHERE id = $1`, [
            req.params.id
        ] );
        res.status(200).json ({
            status: "success",
            restaurant: results.rows[0],
        })
    } catch(err) {
        res.status(500).json ({
            status: "fail"
        });
        console.log(err);
    }
});

//Creates a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query(`INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *`, [
            req.body.name,
            req.body.location,
            req.body.price_range
        ]);
        res.status(201).json ({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    } catch(err) {
        res.status(500).json ({
            status: "fail"
        });
        console.log(err); 
    }
});

//Update a Restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(`UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *`, [
            req.body.name,
            req.body.location,
            req.body.price_range,
            req.params.id
        ]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch (err) {
        res.status(500).json ({
            status: "fail"
        });
        console.log(err); 
    }
});

//Delete a Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(`DELETE FROM restaurants WHERE id = $1`, [req.params.id]);
        res.status(204).json({
            status: "success"
        });
    } catch (err) {
        res.status(500).json ({
            status: "fail"
        });
        console.log(err);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});