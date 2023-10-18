import React, { ReactElement, useState } from 'react';
import './Calendar.scss';

import moment from "moment";
moment.locale('ru', {
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль' ,'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
});

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(moment());
  // const [selectedDay, setSelectedDay] = useState(moment().startOf('day'));

  // const getCurrentMonth = (): string => {
  //   return selectedDate.format('MMMM');
  // }

  const renderMonthlabel = (): ReactElement => {
    return (
      <span className='calendar__month-label'>
        {selectedDate.format('MMMM YYYY')}
      </span>
    )
  }

  const handleSetPreviousMonth = (event: React.MouseEvent): void => {
    event.preventDefault()
    const currentDate = moment(selectedDate);

    setSelectedDate(currentDate.subtract(1, 'month'));
  }

  const handleSetNextMont = (evt: React.MouseEvent): void => {
    evt.preventDefault();
    const currentDate = moment(selectedDate);

    setSelectedDate(currentDate.add(1, 'month'));
  }

  const renderWeeks = () => {
    const weeks = [];
    let done = false;

    const previousCurrentNextView = selectedDate
      .clone()
      .startOf('month')
      .subtract(1, 'd')
      .day('Monday');
    
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={selectedDate}
          key={previousCurrentNextView.week()}
        />
      );

      previousCurrentNextView.add(1, 'w');

      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();

      if (count > 7) break;
    }

    return weeks;
  }

  return (
    <div className="calendar">
      {/* <div className="calendar__month-label">{selectedMonth.format('MMMM')}</div> */}
      <div className="calendar__header">
        <button className='calendar__btn calendar__prev-month' onClick={handleSetPreviousMonth}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M560-280 360-480l200-200v400Z" />
          </svg>
        </button>
        {/* <span className='calendar__month-label'>{getCurrentMonth()}</span> */}
        { renderMonthlabel() }
        <button className='calendar__btn calendar__next-month' onClick={handleSetNextMont}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
        </button>
      </div>
      <div className="calendar__body">
        { renderWeeks() }
      </div>
    </div>
  )
}

function Week ({ previousCurrentNextView, currentMonthView }: { previousCurrentNextView: moment.Moment, currentMonthView: moment.Moment }) {
  const days = [];

  let date = previousCurrentNextView;

  for (let i = 0; i < 7; i++) {
    const day = {
      number: date.date(),
      isPast: date < moment(),
      date: date,
      isCurrentMonth: date.month() === currentMonthView.month(),
      isSunday: date.format('dd') === 'Su',
    }

    days.push(<Day day={day} key={day.date.dayOfYear()} />);
    date = date.clone();
    date.add(1, 'd');
  }



  return (
    <div className="calendar__week">
      {days}
    </div>
  )
}

interface DayProps {
  day: {
    number: number;
    isPast: boolean;
    date: moment.Moment;
    isCurrentMonth: boolean;
    isSunday: boolean;
  }
}

function Day ({ day }: DayProps) {
  const baseClassName = 'calendar__day';
  let fullClassName = baseClassName;

  const addClass = (name: string): void => {
    fullClassName += ` ${baseClassName}_${name}`;
  }

  if (day.isPast) {
    addClass('past');
  }

  if (!day.isCurrentMonth) {
    addClass('another-month');
  }

  if (day.isSunday) {
    addClass('sunday');
  }

  return (
    <div className={fullClassName}>
      {day.number}
    </div>
  )
}

export default Calendar;
