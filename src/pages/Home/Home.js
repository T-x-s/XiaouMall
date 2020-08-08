import React, { Component } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import List from "./components/List/List";
import Nav from "./components/Nav/Nav";
import { requestBanner } from "../../util/request";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
    };
  }
  componentDidMount() {
    requestBanner().then((res) => {
      var arr = res.data.list;
      arr.forEach((item) => {
        item.img = this.$img + item.img;
      });
      console.log(arr);
      this.setState({
        banner: arr,
      });
    });
  }

  render() {
    const { banner } = this.state;
    return (
      <div>
        <Header></Header>
        <Banner banner={banner}></Banner>
        <List></List>
        <Nav></Nav>
      </div>
    );
  }
}
