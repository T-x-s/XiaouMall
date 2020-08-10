import React, { Component } from "react";
import { requestGetGoods,GetGoodsInfo } from "../../util/request";
import GoBack from "../../components/goBack/goBack";
import Header from "../../components/Header/Header";
import "./classificationDetail.css";
import querystring from "querystring";
export default class classificationDetail extends Component {
  constructor() {
    super();
    this.state = {
      Info: [],
      msg: "",
      catename:''
    };
  }
  componentDidMount() {
    const catename = querystring.parse(this.props.location.search.slice(1))
    // console.log(catename.id);
    // console.log(catename.catename);
    this.setState({
      catename:catename.catename
    })
    requestGetGoods({ fid: catename.id}).then((res) => {
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
        <Header msg={this.state.catename}></Header>
        <div className="show">
          {(Info || []).map((item) => {
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
