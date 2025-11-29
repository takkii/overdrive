import fetch from 'node-fetch';

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
        this.app.get("/", async function (req, res) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => {
                controller.abort();
            }, 5000);

            await fetch('http://localhost:1337/datas', {
                signal: controller.signal,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    const jsonString = JSON.stringify(data);
                    const jsonObject = JSON.parse(jsonString);
                    res.locals.name = jsonObject.name;
                    res.locals.title = jsonObject.title;
                    res.locals.data = jsonObject.dtcl;
                    res.locals.data_full = jsonObject.dtcl_full;
                    res.locals.neovim = jsonObject.neovim;
                    res.locals.jetbrains = jsonObject.jetbrain;
                    res.locals.reason = jsonObject.reason;
                    res.locals.settings = (jsonObject.settings).toString();
                    res.locals.plugins = jsonObject.plugins;
                    res.locals.ides = jsonObject.ides;
                    res.locals.copy = jsonObject.copyright;
                    res.locals.youtube = jsonObject.youtube;
                    res.locals.spa = jsonObject.spa;
                    res.locals.github = jsonObject.github;
                    res.locals.github_pf = jsonObject.github_pf;
                    res.locals.github_op = jsonObject.github_op;
                    res.locals.github_us = jsonObject.github_us;
                    res.locals.github_me = jsonObject.github_me;
                    res.locals.githubpages = jsonObject.githubpages;
                    res.locals.githubp_pf = jsonObject.githubp_pf;
                    res.locals.githubp_bd = jsonObject.githubp_bd;
                    res.locals.githubp_sy = jsonObject.githubp_sy;
                    res.locals.githubp_old = jsonObject.githubp_old;
                    res.locals.gist = jsonObject.gist;
                    res.locals.gist_p = jsonObject.gist_p;
                    res.locals.gist_op = jsonObject.gist_op;
                    res.locals.gist_sh = jsonObject.gist_sh;
                    res.locals.gist_mix = jsonObject.gist_mix;
                    res.locals.author = jsonObject.authors;
                    res.locals.spa_full = jsonObject.spa_full;
                    res.locals.spa_dev = jsonObject.spa_dev;
                    res.locals.spa_js = jsonObject.spa_js;
                    res.locals.spa_cm = jsonObject.spa_cm;
                })
                .catch(error => {
                    console.error('エラー:', error);
                });
            res.render("index");
            console.log(req.method + ": " + req.protocol);
        });
    }
}

const environ = new Env();
environ.run();