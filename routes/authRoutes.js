const passport = require("passport");

// export a function to wrap the app and the routes together
module.exports = app => {
  app.get("/auth/google", passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    console.log("--logout", req.path);
    req.logout(); // function attached to req by passport, remove the cookie
    res.redirect("/");
  });

  // For testing
  app.get("/api/current_user", (req, res) => {
    console.log("--current_user", req.user);
    res.send(req.user);
  });

  app.get("/api/session", (req, res) => {
    res.send(req.session);
  });
};
