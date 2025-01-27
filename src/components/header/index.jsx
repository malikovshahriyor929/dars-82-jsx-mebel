// imgs
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
import user from "../../assets/svg/User.svg";
import message from "../../assets/svg/message.svg";
import like from "../../assets/svg/like.svg";
import shopping from "../../assets/svg/shopping-bag (2) 1.svg";

import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
        <div className="container2  ">
          <div className="flex justify-between gap-3 max-[464px]:flex-col items-center max-[528px]:hidden py-2">
            <p className="text-[12px] ">Санкт-Петербург</p>
            <div className=" text-[14px] flex gap-3 max-[464px]:flex-col items-center max-[464px]:justify-center">
              <a href="/">О нас</a>
              <a href="/">Наши салоны</a>
              <a href="/">Оплата и доставка</a>
              <a href="/">Для бизнеса</a>
            </div>
       
          </div>
          <div className="container2 hidden flex-col items-center gap-2 pb-5 text-[14px]  max-[528px]:hidden">
            <a href="/">Каталог</a>
            <a href="/">Каталог по комнатам</a>
            <a href="/">Дизайн-проекты</a>
            <a href="/">Мебель на заказ</a>
          </div>
        </div>
        <div className="container2 flex gap-5 justify-between py-5 items-center">
          <img src={logo} alt="sda" />
          <div className="bg-[#f6f6f6] flex gap-1 p-3 items-center rounded w-[60%] max-[1151px]:w-[50%] max-[913px]:w-[40%] max-[755px]:w-[30%] max-[655px]:w-[50%] max-[464px]:w-[40%] max-[440px]:w-[60%]">
            <input
              className=" w-full  outline-none"
              placeholder="Белый стул"
              type="text"
            />
            <img src={search} alt="" />
          </div>
          <div className="flex flex-col max-[655px]:hidden">
            <a
              className="text-[20px] "
              href="tel:8 800 700 40 24"
            >
              8 800 700 40 24
            </a>
            <p className="text-[12px] ">
              Позвонить или написать
            </p>
          </div>
          <div className="flex items-center gap-5 max-[440px]:hidden">
            <img src={user} alt="das" />
            <img className="max-[464px]:hidden" src={message} alt="fdas" />
            <img src={like} alt="sad" />
            <img src={shopping} alt="dsa" />
          </div>
      
        </div>
        <div className="container2 flex gap-5 pb-5 text-[14px]  max-[464px]:hidden">
          <a href="/">Каталог</a>
          <a href="/">Каталог по комнатам</a>
          <a href="/">Дизайн-проекты</a>
          <a href="/">Мебель на заказ</a>
        </div>
    </Fragment>
  );
};

export default Header;
