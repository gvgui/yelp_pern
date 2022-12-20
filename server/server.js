const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();

app.use((express.json()));

//Gets All Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants');
        console.log(results);
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
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json ({
        status: "success",
        data: {
            restaurant: "mcdonalds"
        }
    });
});

//Update a Restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json ({
        status: "success",
        data: {
            restaurant: "mcdonalds"
        }
    });
});

//Delete a Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});