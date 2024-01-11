import './SearchForm.scss';
import DatePicker from '../DatePicker/DatePicker';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions as dateRangeActions } from '../../store/reducers/DateRangeSlice';
import { actions as locationActions } from '../../store/reducers/LocationsSlice';
import { ChangeEvent } from 'react';

function SearchForm() {
  const cityes = ['moskow', 'novosibirsk', 'krasnoyarsk', 'kemerovo', 'achinsk'];

  const dispatch = useAppDispatch();
  const { from: dateFrom, to: dateTo } = useAppSelector(state => state.dateRangeReducer);
  const { departure, destination } = useAppSelector(state => state.locationsReducer);

  const handleChangeDeparture = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const location = event.target.value;
    dispatch(locationActions.changeDeparture(location));
  }

  const handleChangeDestination = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const location = event.target.value;
    dispatch(locationActions.changeDestination(location));
  }

  const handleReverseLocations = () => {
    dispatch(locationActions.reverseLocations());
  }

  const handleChangeDateFrom = (timestamp: number) => {
    dispatch(dateRangeActions.changeFrom(timestamp));
  }

  const handleChangeDateTo = (timestamp: number) => {
    dispatch(dateRangeActions.changeTo(timestamp));
  }

  return (
    <form className="search-form" action="">
      <div className="search-form__row">
        <span className="search-form__hint">Направление</span>
        <div className="search-form__inputs">
          <div className="search-form__input">
            <input
              type="search"
              list="cities"
              name="lacation-from"
              placeholder="Откуда"
              value={departure}
              onChange={handleChangeDeparture}
            />
          </div>
          <button
            type="button"
            className="search-form__direction-change"
            onClick={handleReverseLocations}
          />
          <div className="search-form__input">
            <input
              type="search"
              list="cities"
              name="lacation-to"
              placeholder="Куда"
              value={destination}
              onChange={handleChangeDestination}
            />
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
            <DatePicker
              current={dateFrom}
              max={dateTo}
              onChangeDate={handleChangeDateFrom}
            />
          </div>
          <div className="search-form__input">
            <DatePicker
              current={dateTo}
              min={dateFrom}
              onChangeDate={handleChangeDateTo}
            />
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
