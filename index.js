var express = require('express'),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    app = express(),
    path = require('path'),
    PORT = process.env.PORT || 5000;


    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "pages", "index.html"));
    });

    

    app.listen(PORT, () => {
        console.log(`Server @ ${PORT}`);
    });