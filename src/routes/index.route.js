const newRouter = require("./new.route");
const siteRouter = require("./site.route");

function route(app) {
    // * sắp xếp route theo thứ tự trên xuống dưới: length(MAX -> MIN)
  //! Truy cap vao route/new ==> add content file "new.handlebars" vao "main.handlebars"
  app.use("/news", newRouter);
  //! respond with page "home.handlebars" when a GET request is made to the homepage
  app.use("/", siteRouter);

  // call to file static:
  app.get("/images", (req, res) => {
    res.sendFile(path.join(__dirname, "public/images/hcmut.png"));
  });
  //   app.post("/signIn", (req, res) => {
  //     console.log(req.body); //! lấy data từ body req với method POST
  //     // Xử lý dữ liệu từ form đăng nhập ở đây
  //     res.send("Đăng nhập thành công");
  //   });
}

module.exports = route;
