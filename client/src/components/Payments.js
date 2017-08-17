import React, { Component } from "react";
import StripCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripCheckout
        name="React-feedback"
        description="$5 from 5"
        amount={10}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripCheckout>
    );
  }
}

export default Payments;
