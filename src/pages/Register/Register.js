import React, { Component } from "react";
import "./components/Register.css";
import GoBack from "../../components/goBack/goBack";
import { requestRegister } from "../../util/request";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        phone: "",
        nickname: "",
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
  register() {
    requestRegister(this.state.user).then((res) => {
      if(res.data.msg){
        this.props.history.push("/login");
        alert(res.data.msg)
      }else{
        alert(res.data.msg)
      }
    });
  }
  render() {
    const {user} = this.state
    return (
      <div className="box">
        <header className="registerHeader">
          <GoBack></GoBack>
          <span className="center">登录</span>
        </header>
        <div className="bottom">
          <div className="ipt">
            <span>手机号：</span>
            <input className="phone" type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")}/>
            <span className="name">昵称：</span>
            <input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, "nickname")}/>
            <span className="password">密码：</span>
            <input type="text" value={user.password} onChange={(e) => this.changeUser(e, "password")}/>
          </div>
          <p>忘记密码</p>
          <div className="login">
            <span onClick={() => this.register()}>注册</span>
          </div>
        </div>
      </div>
    );
  }
}
