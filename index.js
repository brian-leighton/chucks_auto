var express = require('express'),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    app = express(),
    path = require('path'),
    PORT = process.env.PORT || 5000;
    
    app.use(cors());

    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static("public"));

    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/pages", "index.html"));
    });

    app.get("/services", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/pages", "services.html"));
    });

    app.get("/about", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/pages", "about.html"));
    });

    app.get("/sales", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/pages", "about.html"));
    });

    app.get("/contact", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/pages", "contact.html"));
    });

    app.listen(PORT, () => {
        console.log(`Server @ ${PORT}`);
    });