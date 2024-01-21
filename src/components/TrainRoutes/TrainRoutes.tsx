import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { GetRoutes } from '../../models/GetRoutes';
import { routesAPI } from '../../services/GetRoutesService';
import './TrainRoutes.scss';

function TrainRoutes() {
  const { departure, destination } = useAppSelector(state => state.locationsReducer);

  const requestData: GetRoutes = {
    from_city_id: departure._id,
    to_city_id: destination._id,
    limit: 5,
  }

  const { data: { total_count, items: routes }, isLoading: isLoadingRoutes } = routesAPI.useFetchAllRoutesQuery(requestData);

  console.log(routes);

  return (
    <div className="train-routes">
      <div className='train-routes__header'>
        <div className="train-routes__amount">найдено {total_count}</div>
        <ul className="train-routes__menu">
          <li className='train-routes__menu-item'>
            Сортировать по: <select className='train-routes__sort'>
              <option value="date">дате</option>
              <option value="price">цене</option>
              <option value="sort">времени пути</option>
            </select>
          </li>
          <li className='train-routes__menu-item'>Показывать по: 5 10 20</li>
        </ul>
      </div>
      <div className="train-routes__main">
        {isLoadingRoutes && <div>Идет загрузка</div>}
        {routes
          && Array.isArray(routes)
          && <div>
            
          </div>
        }
      </div>
      <div className="train-routes__footer"></div>
    </div>
  )
}

export default TrainRoutes;
