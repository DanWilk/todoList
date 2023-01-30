const express = require('express');
require("dotenv");

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./config/connection');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
});