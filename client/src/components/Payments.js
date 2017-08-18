import React, { Component } from "react";
import StripCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
//
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripCheckout
        name="React-feedback"
        description="$5 from 5"
        amount={10}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
