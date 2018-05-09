"use strict";

const path = require("path");
const express = require("express");

/* we will do our customizations for our app variable below.*/
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "/public")));

app.listen(port, () => {
    console.log(`Server listening on port ${port}!!`);
});

