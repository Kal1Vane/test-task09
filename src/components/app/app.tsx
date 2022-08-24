import MainPage from '../../pages/main';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import './app.scss';

const test = [
  {
    title: "Главная",
    pathname: '/',
  },
  {
    title: "Личный кабинет",
    pathname : "/account"
  }
]
function App() {
  return (
    <div className="app">
        <MainPage />
        <Logo />
        <Navbar />
        <Breadcrumbs props={test} />
    </div>
  );
}

export default App;
