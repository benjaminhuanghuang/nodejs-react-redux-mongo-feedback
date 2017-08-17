import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <a href="#">Sass</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
