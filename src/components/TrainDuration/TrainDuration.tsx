import { Departure } from '../../models/Departure';
import './TrainDuration.scss';
import { durationToHumanizeObject } from '../../utils/dateTranslate';

interface TrainDurationProps {
  departure: Departure;
}

function TrainDuration({ departure }: TrainDurationProps) {

  const { duration } = departure;

  const humanizedDurationObj = durationToHumanizeObject(duration);

  return (
    <div className="train-duration">
      <div className="train-duration__icon" />
      <div className="train-duration__body">
        <span className='train-duration__timepart'>{humanizedDurationObj.days}</span>
        <span className='train-duration__timepart'>{humanizedDurationObj.hours}</span>
        <span className='train-duration__timepart'>{humanizedDurationObj.minutes}</span>
      </div>
    </div>
  )
}

export default TrainDuration;
