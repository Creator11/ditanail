import React from 'react';
import './style.less';


export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__logo">
        <img src='../../assets/img/logo.png' alt="logo" />
      </div>
      <div className="menu__items">
        <div className="menu__item">Каталог</div>
        <div className="menu__item">Брэнды</div>
        <div className="menu__item">Палитра</div>
        <div className="menu__item">Магазины</div>
        <div className="menu__item">Акции</div>
      </div>
      <div className="menu__icons">
        <div className="menu__icon">
            {/* <img src="" /> */}
        </div>
        <div className="menu__icon"></div>
        <div className="menu__icon"></div>
        <div className="menu__icon"></div>
      </div>
    </div>
  );
}
