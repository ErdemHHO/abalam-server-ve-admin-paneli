const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
require("./config/all");

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Connection is running in ${PORT} PORT`);
});


app.use("/api/admin", require("./routes/admin.auth.routes"));
app.use("/api/category", require("./routes/category.routes"));
app.use("/api/product", require("./routes/product.routes"));
app.use("/api/announcement", require("./routes/announcement.routes"));

//app.use("/api/user", require("./routes/api"));

app.use((req, res) => {
  res.json({ success: "false", message: "Gecersiz endpoint" });
});
