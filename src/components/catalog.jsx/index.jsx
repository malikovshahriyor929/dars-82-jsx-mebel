// imgs
import katalog1 from "../../assets/img/katalog.png";
import katalog2 from "../../assets/img/katalog2.png";
import katalog3 from "../../assets/img/katalog3.png";

const Category = () => {
  return (
    <div className="container2 py-10">
      <div className="flex gap-5 justify-between items-center">
        <p className="text-[20px] max-[306px]:text-[17px]">
          Каталог по комнатам
        </p>
        <p className="max-[360px]:hidden">Все комнаты</p>
      </div>
      <div className="grid grid-cols-3 gap-5 py-2 max-[900px]:grid-cols-2 max-[553px]:grid-cols-1">
        <div className="flex flex-col gap-1">
          <img src={katalog1} alt="" />
          <p>Ванная</p>
        </div>
        <div className="flex flex-col gap-1">
          <img src={katalog2} alt="" />
          <p>Прихожая</p>
        </div>
        <div className="flex flex-col gap-1 max-[900px]:hidden">
          <img src={katalog3} alt="" />
          <p>Кухня</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
