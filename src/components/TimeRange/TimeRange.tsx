import { useState } from 'react';
import './TimeRange.scss';

import forwardArrow from './icons/forward.svg';
import RangeTimeSlider, { RangeValues } from '../UI/RangeTimeSlider/RangeTimeSlider';

interface TimeRangeProps {
  onChangeDepartureHours: (departureHours: RangeValues) => void;
  onChangeArrivalHours: (arrivalHours: RangeValues) => void;
}

function TimeRange({ onChangeDepartureHours, onChangeArrivalHours }: TimeRangeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getClass = (baseClass: string) => {
    return isOpen ? baseClass : baseClass + ' closed';
  }

  return (
    <div className="time-range">
      <div className="time-range__header">
        <div className="time-range__icon">
          <img src={forwardArrow} />
        </div>
        <div className="time-range__title">Туда</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={getClass("time-range__toggle-show")}
        />
      </div>
      <div className={getClass('time-range__body')}>
        <div className="time-range__row">
          <div className="time-range__subtitle time-range__subtitle-departure">
            Время отбытия
          </div>
          <div className="time-range__slider">
            <RangeTimeSlider
              onChange={onChangeDepartureHours}
            />
          </div>
        </div>
        <div className="time-range__row">
          <div className="time-range__subtitle time-range__subtitle-arrive">
            Время прибытия
          </div>
          <div className="time-range__slider">
            <RangeTimeSlider
              onChange={onChangeArrivalHours}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeRange;
