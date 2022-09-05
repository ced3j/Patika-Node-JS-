const http = require("http");
const { deflate } = require("zlib");
const port = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Index sayfasındasınız</h2>");
            break;
        case "/hakkimda":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Hakkımda sayfasındasınız</h2>");
            break;
        case "/iletisim":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>İletişim sayfasındasınız</h2>");
            break;
    }

}).listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışmaktadır`);
});