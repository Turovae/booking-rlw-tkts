import { ChangeEvent, useEffect, useState } from 'react';

import './CitySearch.scss';

import { City } from '../../../models/City';
import { useAppDispatch } from '../../../hooks/redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { routesAPI } from '../../../services/GetRoutesService';

interface CitySearchProps {
  name: string;
  placeholder: string;
  initValue: string;
  changeCity: ActionCreatorWithPayload<City, string>
}

function CitySearch({ name, placeholder, initValue, changeCity }: CitySearchProps) {
  const [value, setValue] = useState(initValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  // Почему без этого не работает замена?
  // При изменении пропсов компонент должен перерисовываться.
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const { data: cities } = routesAPI.useFetchAllCitiesQuery(value);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Array.isArray(cities) || cities.length < 1) return;
    if (cities.length === 1 && cities[0].name === value) {
      dispatch(changeCity(cities[0]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, cities]);

  return (
    <div className='city-search'>
      <input
        type="search"
        list={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <datalist id={name}>
        {cities
          && Array.isArray(cities)
          && cities.map((city) => <option
            key={city._id}
            value={city.name}
          >{city.name}</option>)}
      </datalist>
    </div>
  )
}

export default CitySearch;