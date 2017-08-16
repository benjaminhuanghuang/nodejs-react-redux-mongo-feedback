## OAuth workflow
  ![oauth workflow](oath-workflow.png)
  http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html
  http://passportjs.org/docs

## OAuth dependencies
  npm i -S passport passport-google-oauth20
  
  passport   (Core passport library, handling auth in Express apps)
  
  passport-strategy (Authing with google, facebook or local database)

## Create Google account and manage Google API
  https://console.developers.google.com

  - Create project
  - Enable API -> Google+ API
  - Create API credentials-> setup consent screen 
  - Put the keys into config file

## Test
  Access http://localhost:5000/auth/google

  There will be Error: redirect_uri_mismatch
  To fix this issue, we need to set "Authorized redirect URIs" in google developer console

  After that, google oauth will redirect back to application
  http://localhost:5000/auth/google/callback?code=4/V1GCxS4cT6TGDnaW5pQRHNSaLgvVxJ602nfvr40UJcw#

## Setup MongoDB
  When user signs in , save a new record to 'users' collection.

## Passport and session
  In order to support login sessions, Passport will serialize and deserialize user instances 
  to and from the session.

  request->extract cookie-> passport pull user id out of cookie data -> deserialize user
    -> set req.user
