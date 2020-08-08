import React, { Component } from "react";
import "./Index.css";
import Home from "../Home/Home";
import Classification from "../Classification/Classification";
import shoppingCart from "../shoppingCart/shoppingCart";
import Personal from "../Personal/Personal";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
export default class Index extends Component {
  render() {
    return (
      <div className="Index">
        {/* 二级路由出口 */}
        <Switch>
          <Route path="/index/home" component={Home}></Route>
          <Route
            path="/index/classification"
            component={Classification}
          ></Route>
          <Route path="/index/shoppingCart" component={shoppingCart}></Route>
          <Route path="/index/personal" component={Personal}></Route>
          <Redirect to="/index/home"></Redirect>
        </Switch>
        <footer>
          <NavLink to="/index/home" activeClassName="select">首页</NavLink>
          <NavLink to="/index/classification" activeClassName="select">分类</NavLink>
          <NavLink to="/index/shoppingCart" activeClassName="select">购物车</NavLink>
          <NavLink to="/index/personal" activeClassName="select">我的</NavLink>
        </footer>
      </div>
    );
  }
}
