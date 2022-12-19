const express = require("express")

const app = express()

const port = process.env.PORT || 3001;

app.get("/getRestaurants", (req, res) => {
    res.status(404).json ({
        status: "success",
        restaurant: "mcdonalds",
    });
});

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});