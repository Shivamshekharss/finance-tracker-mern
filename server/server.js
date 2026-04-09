const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// Load environment variables from config.env
require('dotenv').config({ path: path.resolve(__dirname, 'config.env') });

// Confirm that MONGO_URI is loaded
console.log("Mongo URI from config.env:", process.env.MONGO_URI);

const port = process.env.PORT || 5000;

// Use middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
const con = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => {
    console.log("MongoDB connected");
    return db;
})
.catch(err => {
    console.log("Connection failed...!", err);
    return null;
});

// Using Routes
app.use(require('./routes/route'));

// Basic route for production or development
app.get('/', function (req, res) {
    res.send('API running');
});

// Start server after MongoDB connection
con.then(db => {
    if (!db) {
        console.log("Exiting process due to MongoDB connection failure");
        return process.exit(1);
    } else {
        const serverInstance = app.listen(port, function (err) {
            if (err) {
                console.error("Server failed to start:", err);
            } else {
                console.log(`Server is running on: http://localhost:${port}`);
            }
        });

        serverInstance.on('error', err => console.log("Failed to connect HTTP server: " + err));
    }
});