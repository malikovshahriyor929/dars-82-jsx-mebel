// imgs
import category1 from "../../assets/img/category1.png";
import category2 from "../../assets/img/category2.png";
import category3 from "../../assets/img/category3.png";

const Mebel_category = () => {
  return (
    <div className="container2">
      <div className="flex gap-3 justify-between items-center">
        <p className="text-[20px] max-[329px]:text-[16px]">
          Популярные категории
        </p>
        <p className="max-[387px]:hidden">Все категории</p>
      </div>
      <div className="grid-cols-6 grid gap-4 py-5 max-[991px]:grid-cols-5 max-[844px]:grid-cols-4 max-[651px]:grid-cols-2 max-[320px]:grid-cols-1">
        <div className="flex items-center gap-2 flex-col">
          <div className="bg-surfaceimg p-4 flex items-center justify-center">
            <img src={category1} alt="" />
          </div>
          <p>Кресла</p>
        </div>
        <div className="flex items-center gap-2 flex-col">
          <div className="bg-surfaceimg p-4 flex items-center justify-center">
            <img src={category2} alt="" />
          </div>
          <p>Столы</p>
        </div>
        <div className="flex items-center gap-2 flex-col">
          <div className="bg-surfaceimg p-4 flex items-center justify-center">
            <img src={category3} alt="" />
          </div>
          <p>Декор</p>
        </div>
        <div className="flex items-center gap-2 flex-col">
          <div className="bg-surfaceimg p-4 flex items-center justify-center">
            <img src={category2} alt="" />
          </div>
          <p>Столы</p>
        </div>
        <div className="flex items-center gap-2 flex-col max-[844px]:hidden">
          <div className="bg-surfaceimg p-4 flex items-center justify-center">
            <img src={category1} alt="" />
          </div>
          <p>Кресла</p>
        </div>
        <div className="flex items-center gap-2 flex-col max-[991px]:hidden">
          <div className="bg-surfaceimg p-4 flex items-center justify-center">
            <img src={category2} alt="" />
          </div>
          <p>Столы</p>
        </div>
      </div>
    </div>
  );
};

export default Mebel_category;
