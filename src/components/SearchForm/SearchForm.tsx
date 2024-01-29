import './SearchForm.scss';
import DatePicker from '../DatePicker/DatePicker';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions as dateRangeActions } from '../../store/reducers/DateRangeSlice';
import { actions as locationActions } from '../../store/reducers/LocationsSlice';
import { FormEventHandler } from 'react';
import CitySearch from '../UI/CitySearch/CitySearch';

interface SearchFormProps {
  onSubmit: () => void
}

function SearchForm({ onSubmit }: SearchFormProps) {
  const dispatch = useAppDispatch();
  const { date_start: dateFrom, date_end: dateTo } = useAppSelector(state => state.dateRangeReducer);
  const { departure, destination } = useAppSelector(state => state.locationsReducer);

  const handleReverseLocations = () => {
    dispatch(locationActions.reverseLocations());
  }

  const handleChangeDateFrom = (timestamp: number) => {
    dispatch(dateRangeActions.changeStart(timestamp));
  }

  const handleChangeDateTo = (timestamp: number) => {
    dispatch(dateRangeActions.changeEnd(timestamp));
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit();
  }

  return (
    <form className="search-form" action="" onSubmit={handleSubmit}>
      <div className="search-form__main">
        <div className="search-form__row">
          <span className="search-form__hint">Направление</span>
          <div className="search-form__inputs">
            <div className="search-form__input">
              <CitySearch
                name='departure'
                placeholder='Откуда'
                initValue={departure.name}
                changeCity={locationActions.changeDeparture}
              />
            </div>
            <button
              type="button"
              className="search-form__direction-change"
              onClick={handleReverseLocations}
            />
            <div className="search-form__input">
              <CitySearch 
                name='destination'
                placeholder='Куда'
                initValue={destination.name}
                changeCity={locationActions.changeDestination}
              />
            </div>
          </div>
        </div>
        <div className="search-form__row">
          <span className="search-form__hint">Дата</span>
          <div className="search-form__inputs search-form__dates">
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
      </div>
      <div className="search-form__row">
        <button className="search-form__button-submit" type='submit'>Найти билеты</button>
      </div>
    </form>
  )
}

export default SearchForm;
