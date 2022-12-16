const express = require("express")

const app = express()

const port = 3005
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});