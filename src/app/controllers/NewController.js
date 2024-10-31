class NewsController {
  // [GET /news]
  index(req, res) {
    res.render("new");
  }
  // [GET/news/detail_1]
  news1(req, res) {
    res.send("Bản tin chi tiết số 1");
  }
}
module.exports = new NewsController();
