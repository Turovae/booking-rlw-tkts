import { ChangeEvent, useEffect, useState } from 'react';

import './CitySearch.scss';

import { City } from '../../../models/City';
import { citiesAPI } from '../../../services/GetCitiesService';
import { useAppDispatch } from '../../../hooks/redux';
import { UnknownAction } from 'redux';

interface CitySearchProps {
  name: string;
  placeholder: string;
  initValue: string;
  changeCity: (city: City) => void;
}

function CitySearch({ name, placeholder, initValue, changeCity }: CitySearchProps) {
  console.log(initValue);
  const [value, setValue] = useState(initValue);
  console.log(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  // Почему без этого не работает замена?
  // При изменении пропсов компонент должен перерисовываться.
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const { data: cities } = citiesAPI.useFetchAllCitiesQuery(value);

  const dispatch = useAppDispatch();

  console.log('CitySearch')
  console.log(cities);

  useEffect(() => {
    console.log('change value or cities')
    if (!Array.isArray(cities) || cities.length < 1) return;
    if (cities.length === 1 && cities[0].name === value) {
      console.log(cities[0]);
      dispatch(changeCity(cities[0]) as unknown as UnknownAction);
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