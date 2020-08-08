import React from 'react';
import "./Header.css";
import logoImg from "../../../../assets/img/img/home/logo.jpg";
export default function Header() {
  return (
    <div>
      <header className="indexHeader">
          <img className="headerLogo" src={logoImg} alt="" />
          <span className="headerSearch">寻找商品</span>
        </header>
    </div>
  )
}
