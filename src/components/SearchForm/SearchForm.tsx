import './SearchForm.scss';
// import { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
// import {default as ReactDatePicker} from 'react-datepicker';

function SearchForm() {
  const cityes = ['moskow', 'novosibirsk', 'krasnoyarsk', 'kemerovo', 'achinsk'];
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <form className="search-form" action="">
      <div className="search-form__row">
        <span className="search-form__hint">Направление</span>
        <div className="search-form__inputs">
          <div className="search-form__input">
            <input type="search" list="cities" name="lacation-from" placeholder="Откуда" />
          </div>
          <button type="button" className="search-form__direction-change" />
          <div className="search-form__input">
            <input type="text" list="cities" name="lacation-to" placeholder="Куда" />
          </div>
          <datalist id="cities">
            {cityes.map((city) => <option key={city} value={city}>{city}</option>)}
          </datalist>
        </div>
      </div>
      <div className="search-form__row">
        <span className="search-form__hint">Дата</span>
        <div className="search-form__inputs">
          <div className="search-form__input">
            <input type="date" name="date-from" />
          </div>
          <div className="search-form__input">
            <input type="date" name="date-date-to" />
          </div>
        </div>
      </div>
      <div className="search-form__row">
        <span className="search-form__hint">Дата (Date Picker)</span>
        <div className="search-form__inputs">
          <div className="search-form__input">
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="search-form__row">
        <button className="search-form__button-submit" type='button'>Найти билеты</button>
      </div>
    </form>
  )
}

export default SearchForm;
