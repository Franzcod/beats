var http = require("http");
var fs = require("fs");

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

// function buscarBeatle(n) {
//   var nombre = beatles[n].name;
//   var nac = beatles[n].birthdate;
//   var pic = beatles[n].profilePic;
//   html = html.replace("{nombre}", nombre);
//   html = html.replace("{nac}", nac);
//   html = html.replace("{pic}", pic);
// }

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/index.html");
      res.end(html);
    }
    //
    else if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(beatles));
    }
    //
    else if (req.url === "/api/John%20Lennon") {
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf8");
      // buscarBeatle(0)
      var nombre = beatles[0].name;
      var nac = beatles[0].birthdate;
      var pic = beatles[0].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{nac}", nac);
      html = html.replace("{pic}", pic);
      res.end(html);
    }
    //
    else if (req.url === "/api/Paul%20McCartney") {
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf8");
      var nombre = beatles[1].name;
      var nac = beatles[1].birthdate;
      var pic = beatles[1].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{nac}", nac);
      html = html.replace("{pic}", pic);
      res.end(html);
    }
    //
    else if (req.url === "/api/George%20Harrison") {
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf8");
      var nombre = beatles[2].name;
      var nac = beatles[2].birthdate;
      var pic = beatles[2].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{nac}", nac);
      html = html.replace("{pic}", pic);
      res.end(html);
    }

    //
    else if (req.url === "/api/Richard%20Starkey") {
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf8");
      var nombre = beatles[3].name;
      var nac = beatles[3].birthdate;
      var pic = beatles[3].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{nac}", nac);
      html = html.replace("{pic}", pic);
      res.end(html);
    }
    //
    else {
      res.writeHead(404, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/404.html", "utf8");
      res.end(html);
      // res.writeHead(404);
      // res.end();
    }
  })
  .listen(1337, () => {
    console.log(`Example app listening at http://localhost:1337`);
  });
