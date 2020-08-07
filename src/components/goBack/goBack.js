import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./goBack.css"
class goBack extends Component {
  goBack() {
    this.props.history.goBack();
  }
  render() {
    return <span className="goBack" onClick={() => this.goBack()}>返回</span>;
  }
}
export default withRouter(goBack);
