import { Route } from "../../models/Route";
import ComfortIcons from "../ComfortIcons/ComfortIcons";
import PriceInfo from "../PriceInfo/PriceInfo";

import TrainDirection from "../TrainDirection/TrainDirection";
import TrainHeader from "../TrainHeader/TrainHeader";
import SelectSeatsButton from "../UI/Buttons/SelectSeatsButton/SelectSeatsButton";

import './TrainRoute.scss';

interface TrainRouteProps {
  route: Route;
}

function TrainRoute({ route }: TrainRouteProps) {
  return (
    <div className="train-route">
      <TrainHeader data={route.departure} isColumn={true} />
      <div className="train-route__body">
        <div className="train-route__col">
          <div className="train-route__directions">
            <TrainDirection
              departure={route.departure}
              showDuration={true}
            />
          </div>
        </div>
        <div className="train-route__col">
          <div className="train-route__prices">
            <PriceInfo departure={route.departure} />
          </div>
          <div className="train-route__comfort">
            <ComfortIcons departure={route.departure} />
          </div>
          <div className="train-route__control">
            <SelectSeatsButton
              // link={route.departure._id}
              data={route.departure}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainRoute;
