//load module express
//site.route = đường đi cho các page: [Home, contact, search,...]
const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.use("/signIn", siteController.signIn); // routeChild thuộc news
router.use("/", siteController.index); //default vào route: new
module.exports = router;
