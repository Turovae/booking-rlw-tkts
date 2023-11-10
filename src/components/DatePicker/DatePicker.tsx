import { useEffect, useRef, useState } from 'react';

import Calendar from '../Calendar/Calendar';
import './DatePicker.scss';

function DatePicker () {
  const container = useRef<HTMLDivElement>(null);
  const [widthContainer, setWidthContainer] = useState(0);

  useEffect(() => {
    const elem = container.current;
    if (elem) {
      setWidthContainer(elem.offsetWidth);
    }
  }, []);

  return (
    <div className='date-picker' ref={container}>
      <div className="date-picker__input-container">
        <input type='text' placeholder='дд/мм/гггг'/>
        <div className="date-picker__input-icon" />
      </div>
      <div className="date-picker__calendar">
        <Calendar width={widthContainer}/>
      </div>
    </div>
  )
}

export default DatePicker;
