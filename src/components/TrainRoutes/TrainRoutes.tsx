import { useAppSelector } from '../../hooks/redux';
import { GetRoutes } from '../../models/GetRoutes';
import { routesAPI } from '../../services/GetRoutesService';
import './TrainRoutes.scss';
import { Route } from '../../models/Route';
import { ChangeEvent, useState } from 'react';
import Toggler from '../UI/Toggler/Toggler';
import PageToggle from '../UI/PageToggle/PageToggle';
import { timestampToRequestDate } from '../../utils/dateTranslate';
import { extractDeterminedFields } from '../../utils/extractDetermined';
import TrainRoute from '../TrainRoute/TrainRoute';

function TrainRoutes() {
  const [ sortBy, setSortBy ] = useState<string>('date');
  const [ perPage, setPerPage ] = useState(5);
  const [ page, setPage ] = useState(1);

  const { departure, destination } = useAppSelector(state => state.locationsReducer);
  const comfortParams = useAppSelector(state => state.comfortReducer);
  const dateRange = useAppSelector(state => state.dateRangeReducer);
  const priceRange = useAppSelector(state => state.priceRangeReducer);
  const startHoursRanges = useAppSelector(state => state.startHoursRangeReducer);
  const endHoursRanges = useAppSelector(state => state.endHoursRangeReducer);

  // console.log('dataRanges', extractDeterminedFields(dateRange, timestampToRequestDate));

  const dataRangesWithRequestFormat = extractDeterminedFields(dateRange, timestampToRequestDate);
  const truesComfortParams = extractDeterminedFields(comfortParams);

  console.log(truesComfortParams);

  const getOffset = (): number => {
    return perPage * (page - 1);
  }

  const requestData: GetRoutes = {
    ...dataRangesWithRequestFormat,
    from_city_id: departure._id,
    to_city_id: destination._id,
    limit: perPage,
    sort: sortBy,
    offset: getOffset(),

    // ...comfortParams,
    ...truesComfortParams,
    ...priceRange,
    ...startHoursRanges,
    ...endHoursRanges,
  }

  const { data: routesObj, isLoading: isLoadingRoutes } = routesAPI.useFetchAllRoutesQuery(requestData);

  let routes: Route[] = [];
  let totalCount: number = 0;

  if (routesObj && routesObj.total_count > 0) {
    routes = routesObj.items;
    totalCount = routesObj.total_count;
  }

  console.log(routes);

  const changePerPage = (item: number | string) => {
    console.log(item);
    if (typeof item === 'number') {
      setPerPage(item);
    }
    setPage(1);
  }

  return (
    <div className="train-routes">
      <div className='train-routes__header'>
        <div className="train-routes__amount">найдено {totalCount}</div>
        <ul className="train-routes__menu">
          <li className='train-routes__menu-item'>
            Сортировать по: <select
              className='train-routes__sort'
              name='sort-by'
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setSortBy(event.target.value)}
            >
              <option value="date">времени</option>
              <option value="price">стоимости</option>
              <option value="duration">длительности</option>
            </select>
          </li>
          <li className='train-routes__menu-item'>
            Показывать по: <span className='train-routes__amount-toggler'>
              <Toggler
                name='train-routes-amount'
                items={[5, 10, 20]}
                current={perPage}
                onClick={changePerPage}
              />
            </span>
          </li>
        </ul>
      </div>
      <div className="train-routes__main">
        {isLoadingRoutes && <div>Идет загрузка</div>}
        {routes.map((route) => <TrainRoute key={route.departure._id} route={route} />)
        }
      </div>
      <div className="train-routes__footer">
        <PageToggle
          count={Math.ceil(totalCount / perPage)}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

export default TrainRoutes;
