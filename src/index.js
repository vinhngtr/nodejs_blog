const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { create } = require("express-handlebars");
// const NewsController = require()
const route = require("./routes/index.route")

const app = express();
const port = 3000;

app.use(morgan("combined"));

//Template engine
// config extend file handlebars == "hbs"
const hbs = create({
  extname: ".hbs",
  partialsDir: path.join(__dirname, "resource/views/partials"),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
// __dirname = biến toàn cục, đại diện cho đường dẫn tới thư mục hiện tại của file đang chạy(index.js)
app.set("views", path.join(__dirname, "resource\\views"));

//! set direction cho file static == "PUBLIC"
app.use(express.static(path.join(__dirname, "public")));

//! using middeware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// ------------------------//
route(app);

app.listen(port, () =>
  console.log(`Demo project blog node js trên port: ${port}`)
);
