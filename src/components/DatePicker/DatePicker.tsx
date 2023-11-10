import { useEffect, useRef, useState } from 'react';

import Calendar from '../Calendar/Calendar';
import './DatePicker.scss';
import moment from 'moment';

function DatePicker () {
  const container = useRef<HTMLDivElement>(null);
  const [widthContainer, setWidthContainer] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<number | null>(null);

  useEffect(() => {
    const elem = container.current;
    if (elem) {
      setWidthContainer(elem.offsetWidth);
    }
  }, []);

  const openCalendar = (): void => {
    if (!showCalendar) {
      setShowCalendar(true);
    }
  }

  const closeCalendar = (): void => {
    if (showCalendar) {
      setShowCalendar(false);
    }
  }

  const setDateHandler = (timestamp: number): void => {
    setDate(timestamp);
    void closeCalendar();
    console.log(dateFromTstToStr(date));
  }

  const dateFromTstToStr = (timestamp: number | null): string => {
    const format = 'DD/MM/yyyy';
    if (!timestamp) {
      return '';
    }

    return moment(timestamp).format(format);
  }

  return (
    <div className='date-picker' ref={container}>
      <div className="date-picker__input-container">
        <input type='text' placeholder='дд/мм/гггг' onBlur={closeCalendar} onFocus={openCalendar} value={dateFromTstToStr(date)}/>
        <div className="date-picker__input-icon" />
      </div>
      {
        showCalendar &&
        <div className="date-picker__calendar">
          <Calendar width={widthContainer} onSelectDate={setDateHandler} />
        </div>
      }
    </div>
  )
}

export default DatePicker;