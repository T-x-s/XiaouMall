import React, { Component } from "react";
import { GetGoodsInfo } from "../../util/request";
import GoBack from "../../components/goBack/goBack";
import Header from "../../components/Header/Header";
import "./classificationDetail.css"
export default class classificationDetail extends Component {
  constructor() {
    super();
    this.state = {
      Info: [],
      msg: "电视",
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(this.props);
    console.log(id);
    GetGoodsInfo({ id: id }).then((res) => {
      this.setState({
        Info: res.data.list,
      });
    });
  }
  render() {
    const { Info } = this.state;
    console.log(Info);
    return (
      <div className="detail">
        <GoBack></GoBack>
        <Header msg={this.state.msg}></Header>
        <div className="show">
          {(Info || []).map((item,index) => {
            return (
              <div className="bottom" key={item.id}>
                <img src={item.img} alt="" />
                <div className="detail">
                  <h2>{item.goodsname}</h2>
                  <h3>￥{item.price.toFixed(2)}</h3>
                  <span>立即抢购</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
