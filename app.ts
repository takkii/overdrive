class Env{
    express: any;
    app: any;
    server: any;
    port: any;
    favicon: any;
    path: any;

    constructor(){
        this.express = require("express");
        this.favicon = require('serve-favicon')
        this.path = require('path')
        this.app = this.express();
        const mask = process.argv[2]
        this.port = process.env.PORT || mask;
        this.server = this.app.listen(this.port, function(){
          console.log('listening on port: ' + mask);
});
        this.app.use(this.favicon(this.path.join(__dirname, 'public', 'favicon.ico')))
        this.app.set('view engine', 'ejs');
    }

    run(){
      this.app.get("/", function(req, res, next){
      res.render("index", {});
    });
  }
}

const environ = new Env();
environ.run();