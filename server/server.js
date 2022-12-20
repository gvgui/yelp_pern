const express = require("express")

const app = express()

const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    console.log("middleware runs");
    next();
});

//Gets All Restaurants
app.get("/api/v1/restaurants", (req, res) => {
    console.log("route handler ran");
    res.status(200).json ({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"],
        },
    });
});

//Gets 1 Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

//Creates a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req);
});

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});