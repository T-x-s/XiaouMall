import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Header.css"
class Header extends Component {
  render() {
    const{msg} =this.props
    return (
        <header className="header">
          <span className="center">{msg}</span>
        </header>
    );
  }
}
export default withRouter(Header);
