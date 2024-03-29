import { Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Settings from "../Settings/Settings";
// import TrainRoutes from "../TrainRoutes/TrainRoutes";

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
          <Outlet />
          {/* <div className="home__sidebar">
            <Settings />
          </div>
          <div className="home__content">
            <TrainRoutes />
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;
