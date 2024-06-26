/** @format */

require(`dotenv`).config();
const express = require(`express`);

const mongoose = require("mongoose");
require("./db/conn");

let Products = require(`./models/productsSchema`);
let defaultData = require(`./defaultData`);
const cors = require(`cors`);
const port = process.env.PORT || 8005;


const router = require("./routes/router");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);
app.get("/", (req, res) => {
  res.status(200).send("This is amazon web api")
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
defaultData();
