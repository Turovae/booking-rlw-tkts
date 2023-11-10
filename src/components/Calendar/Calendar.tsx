import React, { MouseEvent, ReactElement, useState } from 'react';
import './Calendar.scss';

import moment from "moment";
moment.updateLocale('ru', {
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль' ,'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
});

function Calendar({ width, onSelectDate }: { width: number; onSelectDate: (timestamp: number) => void }) {
  const [selectedDate, setSelectedDate] = useState(moment());

  const renderMonthlabel = (): ReactElement => {
    return (
      <span className='calendar__month-label'>
        {selectedDate.format('MMMM')}
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
          onSelectDate={onSelectDate}
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
    <div className="calendar" style={{ width: `${width}px` }}>
      <div className="calendar__pointer"></div>
      <div className="calendar__header">
        <button className='calendar__btn calendar__prev-month' onClick={handleSetPreviousMonth}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M560-280 360-480l200-200v400Z" />
          </svg>
        </button>
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

function Week ({ previousCurrentNextView, currentMonthView, onSelectDate }:
  {
    previousCurrentNextView: moment.Moment;
    currentMonthView: moment.Moment;
    onSelectDate: (timestamp: number) => void;
  }
  ) {
  const days = [];

  let date = previousCurrentNextView;

  for (let i = 0; i < 7; i++) {
    const day = {
      number: date.date(),
      isEnable: date >= moment().startOf('day'),
      date: date,
      isCurrentMonth: date.month() === currentMonthView.month(),
      isSunday: date.format('dd') === 'Su',
    }

    days.push(<Day day={day} key={day.date.dayOfYear()} onSelectDate={onSelectDate} />);
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
    isEnable: boolean;
    date: moment.Moment;
    isCurrentMonth: boolean;
    isSunday: boolean;
  };
  onSelectDate: (timestamp: number) => void
}

function Day ({ day, onSelectDate }: DayProps) {
  const BASE_CLASS = 'calendar__day';
  const PAST_DAY_CLASS = 'past';
  const ANOTHER_MONTH_CLASS = 'another-month';
  const SUNDAY_CLASS = 'sunday';
  const ENABLE_DAY_CLASS = 'enable';

  let fullClassName = BASE_CLASS;

  const addClass = (name: string): void => {
    fullClassName += ` ${BASE_CLASS}_${name}`;
  }

  if (day.isEnable) {
    addClass(ENABLE_DAY_CLASS);
  } else {
    addClass(PAST_DAY_CLASS);
  }

  if (!day.isCurrentMonth) {
    addClass(ANOTHER_MONTH_CLASS);
  }

  if (day.isSunday) {
    addClass(SUNDAY_CLASS);
  }

  const onSelectDay = (event: MouseEvent): void => {
    event.preventDefault();
    
    if (!day.isEnable) {
      return;
    }

    const timestamp = day.date.valueOf();

    onSelectDate(timestamp)
  }

  return (
    <div className={fullClassName} onClick={onSelectDay}>
      {day.number}
    </div>
  )
}

export default Calendar;
