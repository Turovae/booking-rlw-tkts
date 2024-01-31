import { Route } from "../../models/Route";
import ComfortIcons from "../ComfortIcons/ComfortIcons";
import PriceInfo from "../PriceInfo/PriceInfo";

import TrainDirection from "../TrainDirection/TrainDirection";

import './TrainRoute.scss';

interface TrainRouteProps {
  route: Route;
}

function TrainRoute({ route }: TrainRouteProps) {
  return (
    <div className="train-route">
      <div className="train-route__header">
        <div className="train-route__logo" />
        <div className="train-route__title">
          {route.departure.train.name}
        </div>
        <div className="train-route__endpoints">
          <span>{route.departure.from.city.name}</span> → <span>{route.departure.to.city.name}</span>
        </div>
      </div>
      <div className="train-route__body">
        <div className="train-route__col">
          <div className="train-route__directions">
            <TrainDirection departure={route.departure} />
          </div>
        </div>
        <div className="train-route__col">
          <div className="train-route__prices">
            <PriceInfo departure={route.departure} />
          </div>
          <div className="train-route__comfort">
            <ComfortIcons departure={route.departure} />
          </div>
          <button className="train-route__btn">Выбрать места</button>
        </div>
      </div>
    </div>
  )
}

export default TrainRoute;
