import { Departure } from "../../models/Departure";
import { Route } from "../../models/Route";

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
          <div className="train-route__prices">prices</div>
          <div className="train-route__comfort">comfort icons</div>
          <button className="train-route__btn">Выбрать места</button>
        </div>
      </div>
    </div>
  )
}

export default TrainRoute;

import moment from "moment";
import { unixTimestampToTime, durationToHumanFormat } from "../../utils/dateTranslate";

interface TrainDirectionProps {
  departure: Departure;
}

function TrainDirection({ departure }: TrainDirectionProps) {
  const { from, to, duration } = departure;

  console.log(to.datetime - from.datetime);
  console.log(duration);
  console.log(moment.duration(duration, 'seconds'));

  return (
    <div className="train-direction">
      <div className="train-direction__point">
        <div className="train-direction__time">
          {unixTimestampToTime(from.datetime)}
        </div>
        <div className="train-direction__city">{from.city.name}</div>
        <div className="train-direction__station">{from.railway_station_name}</div>
      </div>
      <div className="train-direction__course">
        <div className="train-direction__duration">
          {/* {moment.duration(duration, 'seconds')} */}
          {durationToHumanFormat(duration)}
        </div>
        <div className="train-direction__arrow"></div>
      </div>
      <div className="train-direction__point">
        <div className="train-direction__time">
          {unixTimestampToTime(to.datetime)}
        </div>
        <div className="train-direction__city">{to.city.name}</div>
        <div className="train-direction__station">{to.railway_station_name}</div>
      </div>
    </div>
  )
}
