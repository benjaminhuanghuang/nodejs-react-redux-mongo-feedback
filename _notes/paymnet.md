## Payment processor
  stripe.com
  Recurly    monthly payment, based on stripe
  - Create and active account on stripe.com, test mode by default
  - Get api key under "API"
  - npm i -S react-stripe-checkout, UI library using stripe
  - Using api key in UI
    - <StripCheckout amount={10} token={} stripeKey={process.env.REACT_APP_STRIPE_KEY}/>;
