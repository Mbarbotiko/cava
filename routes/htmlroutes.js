const path = require("path");
module.exports = function(app) {

  
    app.get("/menu", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/menu.html"));
    });

    app.get("/application", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/application.html"));
      });

      app.get("/admin", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/admin-dish.html"));
      });

    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };
  