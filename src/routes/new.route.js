//load module express
const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewController");

router.use("/:detail1", newsController.news1); // routeChild thuộc news
router.use("/", newsController.index); //default vào route: new
module.exports = router;
