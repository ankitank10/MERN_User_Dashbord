const express = require("express");
const app = express();

const routes = require("./routes/routes");
routes(app);


const port = process.env.PORT || 9999;
app.listen(port);
