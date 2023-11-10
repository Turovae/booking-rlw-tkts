import Calendar from '../Calendar/Calendar';
import './DatePicker.scss';

function DatePicker () {
  return (
    <div className='date-picker'>
      <div className="date-picker__input-container">
        <input type='text' placeholder='дд/мм/гггг'/>
        <div className="date-picker__input-icon" />
      </div>
      <div className="date-picker__calendar">
        <Calendar />
      </div>
    </div>
  )
}

export default DatePicker;
