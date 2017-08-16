const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./models/User");  // load schema into mongoose, SHOULD be run before passport
require("./services/passport"); // run the code in passport.js


mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
