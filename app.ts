import {readFileSync} from 'node:fs';

class Env {
    express: any;
    app: any;
    server: any;
    port: any;
    favicon: any;
    path: any;

    constructor() {
        // https://expressjs.com/ja/5x/api.html
        this.express = require("express");
        this.favicon = require('serve-favicon')
        this.path = require('path')
        this.app = this.express();
        const mask = process.argv[2]
        this.port = process.env.PORT || mask;
        this.server = this.app.listen(this.port, function () {
            console.log('listening on port: ' + mask);
        });
        // https://expressjs.com/ja/starter/static-files.html
        this.app.use(this.favicon(this.path.join(__dirname, 'public', 'favicon.ico')))
        this.app.use(this.express.static('public'))
        this.app.set('view engine', 'ejs');
    }

    run() {
        this.app.get("/", function (req, res) {
            const json_data = './json/data.json'
            const data = JSON.parse(readFileSync(`${json_data}`, 'utf8'));
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
    }
}

const environ = new Env();
environ.run();