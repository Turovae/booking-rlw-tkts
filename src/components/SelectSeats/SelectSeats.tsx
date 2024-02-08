import { useLocation, useParams } from 'react-router-dom';
import ChangeSelectionButton from '../UI/Buttons/ChangeSelectionButton/ChangeSelectionButton';
import { GetSeats } from '../../models/GetSeats';

import './SelectSeats.scss';

import forwardIcon from './image/forward-icon.svg';
import { useAppSelector } from '../../hooks/redux';
import { extractDeterminedFields } from '../../utils/extractDetermined';
import { routesAPI } from '../../services/GetRoutesService';
import TrainDirection from '../TrainDirection/TrainDirection';
import TrainHeader from '../TrainHeader/TrainHeader';
import TrainDuration from '../TrainDuration/TrainDuration';
import CoachTypes from '../CoachTypes/CoachTypes';
import Coaches from '../Coaches/Coaches';
import { useEffect, useState } from 'react';
import CoachSummary from '../../models/CoachSummary';

function SelectSeats() {
  const { id } = useParams();
  const comfortParams = useAppSelector(state => state.comfortReducer);
  const truesComfortParams = extractDeterminedFields(comfortParams);
  const { state } = useLocation();

  const [selectedCoachType, setSelectedCoachType] = useState<string>('');
  const [selectedCoaches, setSelectedCoaches] = useState<CoachSummary[]>([]);



  // if (!id) {
  //   return (
  //     <div className="select-seats">
  //       ID не загрузился
  //     </div>
  //   )
  // }

  const requestParams: GetSeats = {
    id: id || '',
    ...truesComfortParams,
  }

  console.log(requestParams);
  console.log(state);

  const { data, isLoading, error } = routesAPI.useFetchSeatsQuery(requestParams);

  console.log(data);
  console.log(isLoading);
  console.log(error);

  useEffect(() => {
    if (data) {
      setSelectedCoaches(
        data.filter(coach => coach.coach.class_type === selectedCoachType)
      )
    }

  }, [selectedCoachType, data])

  const handleSelectCoachType = (type: string) => {
    setSelectedCoachType(type)
  }

  const handleSelectCoach = (coach: CoachSummary) => {
    setSelectedCoaches([coach]);
    setSelectedCoachType(coach.coach.class_type);
  }

  return (
    <div className="select-seats">
      {isLoading && <div>Loading...</div>}
      {data &&
        <>
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
            <div className="select-seats__route">
              {
                state
                  ?
                  <>
                    <div className="select-seats__train-header">
                      <TrainHeader data={state} />
                    </div>
                    <div className="select-seats__train-direction">
                      <TrainDirection departure={state} />
                    </div>
                    <div className='select-seats__train-duration'>
                      <TrainDuration departure={state} />
                    </div>
                  </>
                  : <>Данные о поезде не загрузились</>
              }
            </div>
            <div className="select-seats__tickets">
              <div className="select-seats__subtitle">
                Количество билетов
              </div>
              <div className="select-seats__ticket-types">
                <TicketType
                  title='Взрослых'
                  amount={2}
                  description='Можно добавить еще 3 пассажиров'
                />
                <TicketType
                  title='Детских'
                  amount={1}
                  description='Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%'
                />
                <TicketType
                  title={'Детских "без места"'}
                  amount={0}
                  description={''}
                />
              </div>
            </div>
            <div className="select-seats__line" />
            <div className="select-seats__coach-types">
              <div className="select-seats__subtitle">
                Тип вагона
              </div>
              <CoachTypes
                coaches={data}
                selectedType={selectedCoachType}
                onSelectType={handleSelectCoachType}
              />
            </div>
            <div className="select-seats__coaches">
              <Coaches
                coaches={data}
                selectedCoaches={selectedCoaches}
                onSelectCoach={handleSelectCoach}
              />
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default SelectSeats;

interface TicketTypeProps {
  title: string;
  amount: number;
  description: string;
}

function TicketType({
  title,
  amount,
  description,
}: TicketTypeProps) {
  const isActive = amount > 0;

  return (
    <div className={
      "ticket-type" + (isActive
        ? ' active'
        : '')
    }>
      <div className="ticket-type__header">
        <span className="ticket-type__title">{title}</span>
        <span> - </span>
        <span className="ticket-type__amount">{amount}</span>
      </div>
      <div className="ticket-type__description">{description}</div>
    </div>
  )
}
