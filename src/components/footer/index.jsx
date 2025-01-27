// svg 
import youtube from "../../assets/svg/youtube.svg"
import insta from "../../assets/svg/insta.svg"
import carts from "../../assets/svg/cards.svg"

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container2 py-5 border-y border-x-white border">
        <div className="grid grid-cols-4 gap-7 max-[844px]:grid-cols-2 max-[451px]:flex items-center flex-col max-[451px]:text-center">
          <div className="flex flex-col gap-1">
            <h1 className="pb-2">Каталог</h1>
            <a className="text-[14px]" href="/">
              Акции
            </a>
            <a className="text-[14px]" href="/">
              Мебель
            </a>
            <a className="text-[14px]" href="/">
              Список комнат
            </a>
            <a className="text-[14px]" href="/">
              Товары для дома
            </a>
            <a className="text-[14px]" href="/">
              Фурнитура и комплектующие
            </a>
            <a className="text-[14px]" href="/">
              Плитка, керамогранит и мозаика
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="pb-2">Покупателю</h1>
            <a className="text-[14px]" href="/">
              Мебель на заказ
            </a>
            <a className="text-[14px]" href="/">
              Дизайн-проекты
            </a>
            <a className="text-[14px]" href="/">
              Наши салоны
            </a>
            <a className="text-[14px]" href="/">
              Оплата и доставка
            </a>
            <a className="text-[14px]" href="/">
              О нас
            </a>
            <a className="text-[14px]" href="/">
              Для бизнеса
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="pb-2">Контакты</h1>
            <a className="text-[12px]" href="/">
              Единая справочная: <br />
              <span className="text-[20px]"> 8 800 700 40 24</span> <br />
              Звонок по России бесплатный. <br />
              Режим работы: с 02:00 до 23:00 (МСК).
            </a>
            <a className="text-[12px]" href="/">
              Присоединяйтесь к нам в социальных сетях
            </a>
            <div className="flex gap-2">
              <img src={youtube} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-between">
            <div className="flex items-start flex-col">
              <h1 className="pb-2">Мы принимаем к оплате</h1>
              <img src={carts} alt="" />
            </div>

            <div className="flex gap-2 items-start flex-col">
              <p className="text-[14px]">Нам важно ваше мнение</p>
              <button className="text-[14px] font-normal text-primaryhight1000 border border-primaryhight1000 px-10 py-2">
                Написать нам
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
