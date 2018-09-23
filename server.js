const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);
const mysql = require('mysql');


if (PORT === 8080) {

    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3305,
        user: 'root',
        password: 'pw',
        database: 'cava_db',
        insecureAuth: true
    });
} else {

   //same as above, with live server details
}

connection.connect();

module.exports = connection;

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
