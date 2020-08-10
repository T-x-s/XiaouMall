import React from "react";
import ListImg from "../../../../assets/img/img/home/1.jpg";
import "./List.css";
export default function List(props) {
 const {list}=props
  return (
    <div>
      <div className="listCenter">
        <div className="listImg">
          <img src={ListImg} alt="" />
          <img src={ListImg} alt="" />
          <img src={ListImg} alt="" />
          <img src={ListImg} alt="" />
        </div>
        <div className="listSpan">
          <span>限时抢购</span>
          <span>积分商城</span>
          <span>联系我们</span>
          <span>商品分类</span>
        </div>
      </div>
      <div className="listBottom">
        {(list || []).map((item) => {
          return (
            <div className="bottom" key={item.id} onClick={()=>props.toDetail(item.id)}>
              <img src={item.img} alt="" />
              <div className="listBox">
                  <h2>{item.goodsname}</h2>
                  <h3>￥{item.price.toFixed(2)}</h3>
                  <span >立即抢购</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}