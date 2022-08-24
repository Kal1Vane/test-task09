import MainPage from '../../pages/main';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import './app.scss';

function App() {
  return (
    <div className="app">
        <MainPage />
        <Logo />
        <Navbar />
    </div>
  );
}

export default App;
