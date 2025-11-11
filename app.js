var Env = /** @class */ (function () {
    function Env() {
        this.express = require("express");
        this.favicon = require('serve-favicon');
        this.path = require('path');
        this.app = this.express();
        var mask = process.argv[2];
        this.port = process.env.PORT || mask;
        this.server = this.app.listen(this.port, function () {
            console.log('listening on port: ' + mask);
        });
        this.app.use(this.favicon(this.path.join(__dirname, 'public', 'favicon.ico')));
        this.app.set('view engine', 'ejs');
    }
    Env.prototype.run = function () {
        this.app.get("/", function (req, res, next) {
            res.render("index", {});
        });
    };
    return Env;
}());
var environ = new Env();
environ.run();
