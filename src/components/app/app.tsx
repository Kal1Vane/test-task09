import { breadcrumbsMock } from "../../const";
import MainPage from "../../pages/main";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Footer from "../footer/footer";
import ListProducts from "../list-products/list-products";
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import PointsIcon from "../points-icon/points-icon";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <MainPage />
      <Logo />
      <Navbar />
      <Breadcrumbs props={breadcrumbsMock} />
      <h1 className="main-page__title">Витрина подарков</h1>

      <div className="points__wrapper">
        <span className="points__text">Твои баллы: 50</span>
        <PointsIcon />
      </div>

      <ListProducts />
      <Footer />
    </div>
  );
}

export default App;
