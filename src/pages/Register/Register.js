import React, { Component } from "react";
import "./components/Register.css";
import GoBack from "../../components/goBack/goBack";
export default class Register extends Component {
  render() {
    return (
      <div className="box">
        <header className="registerHeader">
          <GoBack></GoBack>
          <span className="center">登录</span>
        </header>
        <div className="bottom">
          <div className="ipt">
            <input type="text" defaultValue="手机号" />
            <input type="text" defaultValue="昵称：" />
            <input type="text" defaultValue="密码：" />
          </div>
          <p>忘记密码</p>
          <div className="login">
            <span>注册</span>
          </div>
        </div>
      </div>
    );
  }
}
