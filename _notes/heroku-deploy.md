## Dynamic port binding
  Heroku tells the app which port will be used.

  ```
  const PORT = process.env.PORT || 5000;
  app.listen(PORT);
  ```
## Specify Node.js environment
  Add configuration in package.json
  ```
  "engines":{
    "node":"8.1.1",
    "npm":"5.0.3"
  },
  ```
## Tell Heroku the start script
  Add start script in package.json
  ```
  "start" : "node index.js"
  ```
   
## Deploy to Heroku
- Install Heroku CLI
- $ heroku -v
- $ heroku login
- $ heroku create
- ($ git remote add heroku https://git.heroku.com/frozen-atoll-67413.git)  # heroku CLI did it
- $ git push heroku master
- $ heroku open
- $ heroku logs

## Set Heroku Env Variables
  Project Settings -> 