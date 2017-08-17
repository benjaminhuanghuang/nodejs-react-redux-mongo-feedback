import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//
import Header from './Header';

class App extends Component {
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

export default App;
