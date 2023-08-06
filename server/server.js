const express = require("express");
const { readdirSync } = require("fs"); //ใช้เรียกดูข้อมูลแบบอัตโนมัติ
const morgan = require("morgan"); //ใช้ดูรายการที่เป็นพาธข้อมูลขณะทำการทดสอบด้วย postman เช่น GET /api/product/ 200 7.661 ms - 21
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

//Route 1
app.get("/", (req, res) => {
  res.send("Welcome to Thailand");
});

//Route การเรียกข้อมูลแบบอัตโนมัติจาก Routers
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
