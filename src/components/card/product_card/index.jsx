import like from "../../../assets/svg/heart (2) 1.svg";
import product_small_imgs from "../../../assets/img/product_item.png";
import shopping from "../../../assets/svg/shopping.svg";

import React from "react";

const Product_item = ({ value }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="p-5 bg-[#f6f6f6] relative rounded-lg ">
        <img className="max-[500px]:mx-auto" src={value.image} alt="sa" />
        <p className="text-[9px] text-white  bg-black py-1 px-1.5 top-3  left-3 flex items-center justify-center absolute rounded-md">
          Распродажа
        </p>
        <img className="absolute top-3 right-3 z-20" src={like} alt="" />
      </div>
      <div className="flex gap-1 justify-between py-1">
        <p className="text-[14px] max-w-[220px] max-[594px]:max-w-[190px] max-[594px]:text-ellipsis">
          Декоративный куст, с шикарными листьями, горшком
        </p>
        <p className="text-[14px]">2 000 руб.</p>
      </div>
      <p className="text-[8px] uppercase">120 × 212 × 46</p>
      <div className="flex gap-2 justify-between py-3">
        <div className="flex gap-4 p-2">
          <img src={product_small_imgs} alt="" />
          <img src={product_small_imgs} alt="" />
          <img src={product_small_imgs} alt="" />
        </div>
        <img src={shopping} className="p-2" alt="" />
      </div>
    </div>
  );
};

export default Product_item;
