## OAuth dependencies
npm i -S passport passport-google-oauth20
passport   (Core passport library, handling auth in Express apps)
passport-strategy (Authing with goolge, facebook or local database)

## Create Google account and manage Google API
  https://console.developers.google.com

  - Create project
  - Enable API -> Google+ API
  - Create API credentials-> setup consent screen 

## Put the keys into config file


## Test
  http://localhost:5000/auth/google