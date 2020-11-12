let express = require("express");
 
let app = express();

app.get("/", function (req, res) {
 res.send("Welcome to Jenkins CI and CD");
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
console.log('Node server running on port 3000');
module.exports = app;