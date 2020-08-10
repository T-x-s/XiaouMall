import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { requestGetGoods,requestList } from "../../util/request";
import "./Classification.css";
export default class Classification extends Component {
  constructor() {
    super();
    this.state = {
      msg: "分类",
      list: [],
      n: 0,
    };
  }
  componentDidMount() {
    requestList().then((res) => {
      this.setState({
        list: res.data.list,
      });
    });
  }
  changeN(index) {
    this.setState({
      n: index,
    });
  }
  toDetail(id,catename){
    this.props.history.push("/classificationDetail?id="+id+"&catename="+catename)
  }
  render() {
    const { list, n } = this.state;
    return (
      <div className="content">
        <Header msg={this.state.msg}></Header>
        <ul className="ulList">
          {list.map((item, index) => {
            return (
              <li
                onClick={() => this.changeN(index)}
                className={n === index ? "select" : ""}
                key={item.id}
              >
                {item.catename}
              </li>
            );
          })}
        </ul>
        <div className="ulRight">
          {list.length > 0? list[n].children.map((item) => {
                return <div className="shopList" onClick={()=>this.toDetail(item.id,item.catename)} key={item.id}>
                    <img src={item.img} alt=""/>
                    <p>{item.catename}</p>
                    </div>;
              })
            : null}
        </div>
      </div>
    );
  }
}
