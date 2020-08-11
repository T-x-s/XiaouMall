import React, { Component } from "react";
import Header from "../../components/Header/Header";
import GoBack from "../../components/goBack/goBack";
import { GetGoodsInfo } from "../../util/request";
import querystring from "querystring";
import "./Detail.css";
import "antd-mobile/dist/antd-mobile.css";
import { Modal, List, Button, WingBlank } from "antd-mobile";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "商品详情",
      Info: [],
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
  shopCart() {}
  componentDidMount() {
    const id = querystring.parse(this.props.location.search.slice(1));
    console.log(id);
    GetGoodsInfo({ id: id.id }).then((res) => {
      this.setState({
        Info: res.data.list,
      });
    });
  }
  render() {
    const { msg, Info } = this.state;
    return (
      <div className="detail">
        <GoBack></GoBack>
        <Header msg={msg}></Header>
        {(Info || []).map((item) => {
          return (
            <div className="detailContent" key={item.id}>
              <img src={item.img} alt="" />
              <div className="detailWord">
                <div className="detailName">{item.goodsname}</div>
                <div className="detailPrice">
                  ￥{item.price.toFixed(2)}
                  <span>热卖</span>
                  <span>新品</span>
                </div>
                <p>￥{item.market_price.toFixed(2)}</p>
              </div>
              <div
                className="arrImg"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>

              <footer>
                <WingBlank>
                  <p onClick={this.showModal("modal2")}>加入购物车</p>
                  <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose("modal2")}
                    animationType="slide-up"
                    // afterClose={() => {
                    //   alert("afterClose");
                    // }}
                  >
                    <List key={item.id} className="popup-list">
                      <div className="listTop">
                        <img src={item.img} alt="" />
                        <span>{item.goodsname}</span>
                      </div>
                      <h5 className="specs">{item.goodsname}</h5>
                      {(Info || []).map((item) => {
                        let arr = JSON.parse(item.specsattr);
                        console.log(arr);
                        arr.map((arrItem) => {
                          return (
                              <span key={arrItem} className="span">{arrItem}</span> 
                          );
                        });
                      })}

                      <List.Item>
                        <Button onClick={this.onClose("modal2")}>
                          加入购物车
                        </Button>
                      </List.Item>
                    </List>
                  </Modal>
                </WingBlank>
              </footer>
            </div>
          );
        })}
      </div>
    );
  }
}
