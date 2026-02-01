"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var log4js = require("log4js");
var Env = /** @class */ (function () {
    function Env() {
        // https://expressjs.com/ja/5x/api.html
        this.express = require('express');
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
        this.app.use('/bootstrap', this.express.static(this.path.join(__dirname, 'node_modules/bootstrap/dist')));
        this.app.use(this.express.static('public'));
        this.app.set('view engine', 'ejs');
        this.app.use(function (req, res, next) {
            log4js.configure({
                appenders: {
                    overdrive: {
                        type: "file", filename: "./logs/overdrive.log",
                        maxLogSize: 10 * 1024 * 1024,
                        backups: 5, compress: true
                    }
                },
                categories: { default: { appenders: ["overdrive"], level: "error" } },
            });
            var logger = log4js.getLogger();
            logger.level = "debug";
            // const clientIP = req.connection.remoteAddress;
            var clientIP = req.ip;
            var splittedAddress = "".concat(clientIP).split(':');
            var ipAddress = splittedAddress[splittedAddress.length - 1];
            // Warning, do not access multiple times.
            if ("".concat(ipAddress) == '161.132.68.104') {
                res.render("error");
                return;
            }
            else if ("".concat(ipAddress) == '185.16.39.146') {
                res.render("error");
                return;
            }
            else if ("".concat(ipAddress) == '158.158.35.58') {
                res.render("error");
                return;
            }
            else if ("".concat(ipAddress) == '143.64.150.164') {
                res.render("error");
                return;
            }
            else if ("".concat(ipAddress) == '78.153.140.224') {
                res.render("error");
                return;
            }
            else if ("".concat(ipAddress) == '193.142.147.209') {
                res.render("error");
                return;
            }
            logger.debug("Client IP: ".concat(ipAddress));
            next();
        });
    }
    Env.prototype.run = function () {
        this.app.get('/', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var controller_1, timeoutId, platform, response, data, jsonString, jsonObject, response, data, jsonString, jsonObject, response, data, jsonString, jsonObject, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 10, 11, 12]);
                            controller_1 = new AbortController();
                            timeoutId = setTimeout(function () {
                                controller_1.abort();
                            }, 5000);
                            platform = require('node:process').platform;
                            if (!(process.platform === "win32")) return [3 /*break*/, 3];
                            return [4 /*yield*/, (0, node_fetch_1.default)('http://localhost:1337/datas', {
                                    signal: controller_1.signal,
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })];
                        case 1:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error("Warning, server status: ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            jsonString = JSON.stringify(data);
                            jsonObject = JSON.parse(jsonString);
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
                            return [3 /*break*/, 9];
                        case 3:
                            if (!(process.platform === "linux")) return [3 /*break*/, 6];
                            return [4 /*yield*/, (0, node_fetch_1.default)('http://localhost:1337/datas', {
                                    signal: controller_1.signal,
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })];
                        case 4:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error("Warning, server status: ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 5:
                            data = _a.sent();
                            jsonString = JSON.stringify(data);
                            jsonObject = JSON.parse(jsonString);
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
                            return [3 /*break*/, 9];
                        case 6: return [4 /*yield*/, (0, node_fetch_1.default)('http://0.0.0.0:1337/datas', {
                                signal: controller_1.signal,
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })];
                        case 7:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error("Warning, server status: ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 8:
                            data = _a.sent();
                            jsonString = JSON.stringify(data);
                            jsonObject = JSON.parse(jsonString);
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
                            _a.label = 9;
                        case 9: return [3 /*break*/, 12];
                        case 10:
                            error_1 = _a.sent();
                            console.error('Error: ', error_1);
                            return [3 /*break*/, 12];
                        case 11:
                            res.render('index');
                            console.log(req.method + ": " + req.protocol);
                            return [7 /*endfinally*/];
                        case 12: return [2 /*return*/];
                    }
                });
            });
        });
    };
    return Env;
}());
var environ = new Env();
environ.run();
