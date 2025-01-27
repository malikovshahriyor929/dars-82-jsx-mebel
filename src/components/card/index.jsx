// imgs 
import heart from "../../assets/svg/heart (2) 1.svg"


import products from "../utils/cards.js";
import Product_item from "./product_card/index.jsx";

const Card = () => {
  return (
    <div className="container2 py-10">
      <div className="flex gap-3 justify-between items-center">
        <p className="text-[20px] max-[329px]:text-[16px]">
          Популярные категории
        </p>
        <p>Все категории</p>
      </div>
      <div className="py-3 grid grid-cols-4 gap-5 max-[1200px]:grid-cols-3 max-[887px]:grid-cols-2 max-[500px]:grid-cols-1">
        {products.map((value) => (
         <Product_item key={value.id} value={value}/>
        ))}
     

      </div>
    </div>
  );
};

export default Card;
