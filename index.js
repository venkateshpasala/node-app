let express = require("express");
 
let app = express();

app.get("/", function (req, res) {
 res.send("Welcome to Jenkins CI and CD");
});

//listen to port 2020 by default
app.listen(process.env.PORT || 2020);
console.log('Node server running on port 2020');
module.exports = app;