const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
//
const keys = require("./config/keys");

require("./models/User"); // load schema into mongoose, SHOULD be run before passport
require("./models/Survey");
require("./models/Recipient");

require("./services/passport"); // run the code in passport.js
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    keys: [keys.cookieKey],
    name: "express-ses-react-feedback" //defaults to express:sess.
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

// only for heroku env.
// in dev env, we use a separate sever for client side
if (process.env.NODE_ENV === "production") {
  // express will serve up production assets like .js and .css
  app.use(express.static("client/build"));

  // express will serve up index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    console.log("no route", req.path);
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
