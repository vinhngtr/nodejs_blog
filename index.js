const express = require("express");
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/ab*cd", (req, res) => {
  var a = 2020;
  var b = 2024;
  let c = a + b;
    return res.send("ab*cd đã chỉnh sửa");
    
});
app.listen(port, () =>
  console.log(`Nguyen Trong Vinh dz da co mat tai: ${port}`)
);
