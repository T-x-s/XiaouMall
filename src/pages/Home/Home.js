import React, { Component } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import List from "./components/List/List";
import Nav from "./components/Nav/Nav";
import { requestBanner } from "../../util/request";
import {requestGoods} from "../../util/request";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner:[],
      list:[]
    };
  }
  componentDidMount() {
    requestBanner().then((res) => {
      var arr = res.data.list;
      arr.forEach((item) => {
        item.img = this.$img + item.img;
      });
      // console.log(arr);
      this.setState({
        banner: arr,
      });
    });
    requestGoods().then((res)=>{
      var arrList = res.data.list[0].content
      arrList.forEach((item=>{
        item.img = this.$img + item.img;
      }))
      // console.log(arrList);
      this.setState({
        list:arrList
      })
    })
  }

  render() {
    const { banner, list} = this.state;
    return (
      <div>
        <Header></Header>
        <Banner banner={banner}></Banner>
        <List list={list}></List>
        <Nav></Nav>
      </div>
    );
  }
}
