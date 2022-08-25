import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ListProducts from "../components/list-products/list-products";
import PointsIcon from "../components/points-icon/points-icon";
import { breadcrumbsMock } from "../const";
import "./main.scss";

function MainPage(): JSX.Element {
  return (
    <section className="main__page">
      <Header />
      <section className="main__content">
        <Breadcrumbs props={breadcrumbsMock} />
        <h1 className="main-page__title">Витрина подарков</h1>

        <div className="points__wrapper">
          <div className="points__container">
            <span className="points__text">Твои баллы: 50</span>
            <PointsIcon />
          </div>
        </div>
      </section>
      <ListProducts />
      <Footer />
    </section>
  );
}

export default MainPage;
