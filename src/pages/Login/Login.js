import React, { Component } from "react";
import "./components/Login.css";
export default class Login extends Component {
  render() {
    return (
      <div className="box">
        <header>
          <span className="center">登录</span>
        </header>
        <a href="" className="aOne">注册</a>
        <div className="bottom">
          <div className="ipt">
            <input type="text" defaultValue="账号：" />
            <input type="text" defaultValue="密码：" />
          </div>
          <p>忘记密码</p>
          <div className="login">
            <a href="">登录</a>
          </div>
        </div>
      </div>
    );
  }
}
