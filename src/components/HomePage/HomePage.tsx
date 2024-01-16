import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import './HomePage.scss';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <div className="home__broadcrumbs">
        <Breadcrumbs />
      </div>
      <div className="container">
        <div className="home__main">
          <div className="home__aside">
            Фильтр
          </div>
          <div className="home__content">
            Контент
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;
