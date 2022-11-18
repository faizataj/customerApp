
const express = require('express');
const app = express();
const routers = require("./routes")(express.Router(), app);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(bodyParser.json());
app.use("/", routers);

app.listen(4000, () => {
    console.log("Application is running on the port 4000")
});