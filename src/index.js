const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { create } = require("express-handlebars");

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

//! set direction cho file static:
app.use(express.static(path.join(__dirname, "public")));

//! respond with page "home.handlebars" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.render("home"); // render content page home vào nội dung {{ body }} của main.handlebars
});
//! Tương tự, khi user truy cap vao route/new ==> add content file "new.handlebars" vao "main.handlebars"
app.get("/new", (req, res) => {
  res.render("new");
});

// call to file static:
app.get("/images", (req, res) => {
  res.sendFile(path.join(__dirname, "public/images/hcmut.png"));
});
app.get("/searchs", (req, res) => {
  console.log(req.query)
  res.render("searchs")
})
app.listen(port, () =>
  console.log(`Demo project blog node js trên port: ${port}`)
);
