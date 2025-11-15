"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var Env = /** @class */ (function () {
    function Env() {
        // https://expressjs.com/ja/5x/api.html
        this.express = require("express");
        this.favicon = require('serve-favicon');
        this.path = require('path');
        this.app = this.express();
        var mask = process.argv[2];
        this.port = process.env.PORT || mask;
        this.server = this.app.listen(this.port, function () {
            console.log('listening on port: ' + mask);
        });
        // https://expressjs.com/ja/starter/static-files.html
        this.app.use(this.favicon(this.path.join(__dirname, 'public', 'favicon.ico')));
        this.app.use(this.express.static('public'));
        this.app.set('view engine', 'ejs');
    }
    Env.prototype.run = function () {
        this.app.get("/", function (req, res) {
            var json_data = './json/data.json';
            var data = JSON.parse((0, node_fs_1.readFileSync)("".concat(json_data), 'utf8'));
            res.locals.title = data.title;
            res.locals.data = data.dtcl;
            res.locals.data_full = data.dtcl_full;
            res.locals.neovim = data.neovim;
            res.locals.jetbrains = data.jetbrain;
            res.locals.reason = data.reason;
            res.locals.settings = data.settings;
            res.locals.plugins = data.plugins;
            res.locals.ides = data.ides;
            res.locals.copy = data.copyright;
            res.render("index");
            console.log(req.method + ": " + req.protocol);
        });
    };
    return Env;
}());
var environ = new Env();
environ.run();
