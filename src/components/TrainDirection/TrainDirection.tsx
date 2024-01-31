import { Departure } from "../../models/Departure";
import { unixTimestampToTime, durationToHumanFormat } from "../../utils/dateTranslate";

import './TrainDirection.scss';

interface TrainDirectionProps {
  departure: Departure;
}

function TrainDirection({ departure }: TrainDirectionProps) {
  const { from, to, duration } = departure;

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

export default TrainDirection;
