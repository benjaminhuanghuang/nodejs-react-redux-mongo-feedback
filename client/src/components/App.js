import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//
import Header from './Header';
import * as actions from '../actions';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
       <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Header}/>
          <Route exact path="/surveys" component={Header}/>
          <Route exact path="/surveys/new" component={Header}/>
        </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
