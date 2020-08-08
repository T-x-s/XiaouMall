import React, { Component } from "react";
import "./components/Login.css";
import {requestLogin} from "../../util/request"
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        phone: "",
        password: "",
      },
    };
  }
  changeUser(e, key) {
    this.setState({
      user: {
        ...this.state.user,
        [key]: e.target.value,
      },
    });
  }
  login() {
    requestLogin(this.state.user).then((res) => {
      if (res.data.msg) {
        // sessionStorage.setItem("isLogin", 1);
        this.props.history.push("/index/home");
      } else {
        alert(res.data.msg);
      }
    });
  }
  changeRegister() {
    this.props.history.push("/register");
  }
  render() {
    const { user } = this.state;
    return (
      <div className="box">
        <header className="headerLogin">
          <span className="center">登录</span>
        </header>
        <span className="aOne" onClick={() => this.changeRegister()}>
          注册
        </span>
        <div className="loginBottom">
          <div className="ipt">
          <span>账号：</span>
            <input
              type="text"
              value={user.phone}
              onChange={(e) => this.changeUser(e, "phone")}
            />
            <span className="password">密码：</span>
            <input
              type="password"
              value={user.password}
              onChange={(e) => this.changeUser(e, "password")}
            />
          </div>
          <p>忘记密码</p>
          <div className="login">
            <span onClick={() => this.login()}>登录</span>
          </div>
        </div>
      </div>
    );
  }
}
