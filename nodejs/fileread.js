var fs = require("fs"); //nodejs의 모듈인 fileread를 이용한다는 의미
fs.readFile("sample.txt", "utf8", function (err, data) {
  console.log(data);
});
