import React, { Component } from "react";
import "./style.css";

class Header extends Component {

  render() {

    return (

      <div className="style">
        <a href="home" class="logo">
          To Do List
        </a>
        <div class="header-right">
          <a class="active" href="home">
            Home
          </a>
          <a href="Login">Login</a>
          <a href="Signup">Sign up</a>
        </div>
      </div>
    );
  }
}
export default Header;
