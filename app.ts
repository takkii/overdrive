class Env{
    express: any;
    app: any;
    server: any;
    address: any;

    constructor(){
        this.express = require("express");
        this.app = this.express();
        this.server = this.app.listen(3000, function(){
          console.log(`Node.js, Listening to Windows/WSL2.`)
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