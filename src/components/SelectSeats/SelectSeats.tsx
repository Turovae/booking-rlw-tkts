import { useParams } from 'react-router-dom';
import ChangeSelectionButton from '../UI/Buttons/ChangeSelectionButton/ChangeSelectionButton';
import { GetSeats } from '../../models/GetSeats';

import './SelectSeats.scss';

import forwardIcon from './image/forward-icon.svg';
import { useAppSelector } from '../../hooks/redux';
import { extractDeterminedFields } from '../../utils/extractDetermined';
import { routesAPI } from '../../services/GetRoutesService';

function SelectSeats() {
  const { id } = useParams();
  const comfortParams = useAppSelector(state => state.comfortReducer);
  const truesComfortParams = extractDeterminedFields(comfortParams);

  if (!id) {
    return (
      <div className="select-seats">
        ID не загрузился
      </div>
    )
  }

  const requestParams: GetSeats = {
    id,
    ...truesComfortParams,
  }

  console.log(requestParams);

  const { data, isLoading, error } = routesAPI.useFetchSeatsQuery(requestParams);

  console.log(data);
  console.log(isLoading);
  console.log(error);

  return (
    <div className="select-seats">
      <h2 className='select-seats__header'>Выбор мест</h2>
      <div className="select-seats__content">
        <div className="select-seats__top-control">
          <span className="select-seats__icon">
            <img src={forwardIcon} />
          </span>
          <ChangeSelectionButton
            title='Выбрать другой поезд'
          />
        </div>
      </div>
    </div>
  )
}

export default SelectSeats;
