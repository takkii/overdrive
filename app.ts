class Env{
    express: any;
    app: any;
    server: any;
    port: any;

    constructor(){
        this.express = require("express");
        this.app = this.express();
        this.port = process.env.PORT || 3000;
        const mask = '3000'
        this.server = this.app.listen(this.port, function(){
          console.log('listening on port: ' + mask);
});
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