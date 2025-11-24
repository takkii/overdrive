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
            res.locals.name = data.name;
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
            res.locals.youtube = data.youtube;
            res.locals.spa = data.spa;
            res.locals.github = data.github;
            res.locals.github_pf = data.github_pf;
            res.locals.github_op = data.github_op;
            res.locals.github_us = data.github_us;
            res.locals.github_me = data.github_me;
            res.locals.githubpages = data.githubpages;
            res.locals.githubp_pf = data.githubp_pf;
            res.locals.githubp_bd = data.githubp_bd;
            res.locals.githubp_sy = data.githubp_sy;
            res.locals.githubp_old = data.githubp_old;
            res.locals.gist = data.gist;
            res.locals.gist_p = data.gist_p;
            res.locals.gist_op = data.gist_op;
            res.locals.gist_sh = data.gist_sh;
            res.locals.gist_mix = data.gist_mix;
            res.locals.author = data.authors;
            res.locals.spa_full = data.spa_full;
            res.locals.spa_dev = data.spa_dev;
            res.locals.spa_js = data.spa_js;
            res.locals.spa_cm = data.spa_cm;
            res.render("index");
            console.log(req.method + ": " + req.protocol);
        });
    }
}

const environ = new Env();
environ.run();