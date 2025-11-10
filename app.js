var Env = /** @class */ (function () {
    function Env() {
        this.express = require("express");
        this.app = this.express();
        this.port = process.env.PORT || 3000;
        var mask = '3000';
        this.server = this.app.listen(this.port, function () {
            console.log('listening on port: ' + mask);
        });
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
