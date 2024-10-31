class SiteController {
  //[GET]/HOME
  index(req, res) {
    res.render("home");
  }
  //[GET] / SignIn
  signIn(req, res) {
    res.render("sign-in");
  }
}

module.exports = new SiteController();
