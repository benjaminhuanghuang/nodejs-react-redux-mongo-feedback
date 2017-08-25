## Sendgrid.com
  Settings -> API Keys

  npm install -S sendgrid

## Work flow
  - Tell Sendgrid to send a email
  - Sendgrid scans the email and replace every link with their own special one
  - User click the link
  - Sendgrid know who click it.
  - User sent to their destination, Sendgrid sends a message to server about the click


## In production
  Sendgrid makes a post to our server with data about all the clicks in the last 30 seconds 
  Our server process list of clicks on API
  

## LocalTunnel in development
  npm install -g localtunnel
  lt -p <localport> -s <my-special-domain>

  Sendgrid post to my-special-domain.localtunnel.com 
      -> localTunnel server on local computer
        ->  post to our server running on localhost:5000 
  
## Setup webhook
  Sendgrid dashboard -> Settings -> Mail Settings -> Event Notification -> HTTP POST URL
    https://benjamin2017.localtunnel.me/api/surveys/webhooks
