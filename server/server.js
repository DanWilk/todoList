const express = require('express');
const mongoose = require('mongoose');
require("dotenv");

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./config/connection');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(require("./routes"));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
mongoose.set('debug', true);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
    });
})
