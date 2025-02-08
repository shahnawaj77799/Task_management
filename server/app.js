const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const adminRoute= require("./routes/adminRoute");
const empRoute= require("./routes/employeeRoute");
const bodyparser = require('body-parser');
const port =process.env.PORT ||8080;
const MNDB=process.env.DBCONN;
mongoose
  .connect(MNDB)
  .then(() => {
    console.log("DB Connected!!!");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin", adminRoute);
app.use("/employee", empRoute);



app.listen(port, ()=>{
    console.log("Server run on 8080 port!");
})