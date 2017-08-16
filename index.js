const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require('passport');
//
const keys = require("./config/keys");
require("./models/User"); // load schema into mongoose, SHOULD be run before passport
require("./services/passport"); // run the code in passport.js
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
