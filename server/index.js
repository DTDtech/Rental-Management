const express = require('express');
require('dotenv').config();

const db = require('./db');
db.connect().catch((err) => console.log(err));


const app = express();
const PORT = 3000;

const router = express.Router();

router.get('/', (req, res) => res.status(200).send("Rental Management"));
 
app.use(router);
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log(process.env.USER);
    console.log("Server listening on PORT", PORT);
});