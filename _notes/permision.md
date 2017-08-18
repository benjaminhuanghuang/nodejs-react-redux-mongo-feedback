  ## Check permission on route
  ```
  app.post('/api/stripe', (req, res) => {
    if(!req.user){
      return res.status(401).send({error: 'You must log in!'});
    }
    ...
  }
  ```

  ## Middleware on route handler
  ```
    app.post('/api/stripe', requireLogin, async (req, res) => {
    if(!req.user){
      return res.status(401);
    }
  ```

  ## Middle on app
    app.use(middleware)