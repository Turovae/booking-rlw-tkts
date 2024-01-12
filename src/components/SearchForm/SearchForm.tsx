import './SearchForm.scss';
import DatePicker from '../DatePicker/DatePicker';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions as dateRangeActions } from '../../store/reducers/DateRangeSlice';
import { actions as locationActions } from '../../store/reducers/LocationsSlice';
import { ChangeEvent, useState, FocusEvent } from 'react';
import { citiesAPI } from '../../services/GetCitiesService';

function SearchForm() {
  const dispatch = useAppDispatch();
  const { from: dateFrom, to: dateTo } = useAppSelector(state => state.dateRangeReducer);
  const locationTypes = useAppSelector(state => state.locationsReducer);
  const { departure, destination } = locationTypes;

  const [currentEditLocation, setCurrentEditLocation] = useState<string | null>(null);

  const { data: cities } = citiesAPI.useFetchAllCitiesQuery(currentEditLocation);

  const handleChangeDeparture = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const location = event.target.value;
    setCurrentEditLocation(location);
    dispatch(locationActions.changeDeparture(location));
  }

  const handleChangeDestination = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const location = event.target.value;
    setCurrentEditLocation(location);
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

  const handleSetEditLocation = (event: FocusEvent) => {
    if (!event.target) return;

    const { name } = event.target as HTMLInputElement;
    const locationType = locationTypes[name as keyof typeof locationTypes];

    setCurrentEditLocation(locationType);
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
              name="departure"
              placeholder="Откуда"
              value={departure}
              onChange={handleChangeDeparture}
              onFocus={handleSetEditLocation}
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
              name="destination"
              placeholder="Куда"
              value={destination}
              onChange={handleChangeDestination}
              onFocus={handleSetEditLocation}
            />
          </div>
          <datalist id="cities">
            {cities
              && Array.isArray(cities)
              && cities.map((city) => <option key={city._id} value={city.name}>{city.name}</option>)}
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
