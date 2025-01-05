var Env = /** @class */ (function () {
    function Env() {
        this.express = require("express");
        this.app = this.express();
        this.server = this.app.listen(3000, function () {
            console.log("Node.js, Listening to Windows/WSL2.");
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
