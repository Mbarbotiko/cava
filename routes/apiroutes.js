const dishData = require("../data/dishes");
module.exports = function (app) {
    app.get("/api/dishes", function (req, res) {
        res.json(dishData);

    });

    app.post("/api/dishes", function (req, res) {        
        dishData.push(req.body);
        res.json(dishData);
    });

};
