import { Outlet } from 'react-router-dom';
import Settings from '../Settings/Settings';
// import TrainRoutes from '../TrainRoutes/TrainRoutes';

import './Tickets.scss';

function Tickets() {
  return (
    <>
      <div className="sidebar">
        <Settings />
      </div>
      <div className="content">
        <Outlet />
        {/* <TrainRoutes /> */}
      </div>
    </>
  )
}

export default Tickets;
