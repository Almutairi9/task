import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="style">
        <a href="Header" class="logo">
          To Do List
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}
export default Header;
