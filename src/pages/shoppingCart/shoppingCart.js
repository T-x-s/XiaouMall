import React, { Component } from "react";
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from "antd-mobile";
import "./shoppingCart.css";

export default class shoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      modal2: false,
    };
  }
  showModal = (key) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  };
  onClose = (key) => () => {
    this.setState({
      [key]: false,
    });
  };
  render() {
    return (
      <div>
        {/* ant-design插件 */}
        <WingBlank>
          <Button onClick={this.showModal("modal2")}>popup</Button>
          <Modal
            popup
            visible={this.state.modal2}
            onClose={this.onClose("modal2")}
            animationType="slide-up"
            afterClose={() => {
              alert("afterClose");
            }}
          >
            <List
              renderHeader={() => <div>委托买入</div>}
              className="popup-list"
            >
              {["股票名称", "股票代码", "买入价格"].map((i, index) => (
                <List.Item key={index}>{i}</List.Item>
              ))}
              <List.Item>
                <Button type="primary" onClick={this.onClose("modal2")}>
                  买入
                </Button>
              </List.Item>
            </List>
          </Modal>
        </WingBlank>
      </div>
    );
  }
}
