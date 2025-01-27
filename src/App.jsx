import Header from "./components/header";
import Showcase from "./components/showcase.jsx";
import Category from "./components/catalog.jsx/index.jsx";
import Mebel_category from "./components/mabel_category";
import Card from "./components/card/index.jsx";
import Footer from "./components/footer/index.jsx";
import { Fragment } from "react";




function App() {
  return (
    <Fragment>
      <Header />
      <Showcase />
      <Category />
      <Mebel_category />
      <Card />
      <Footer/>
    </Fragment>
  );
}

export default App;
