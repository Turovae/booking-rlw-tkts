import { Departure } from '../../models/Departure';

import './PriceInfo.scss';

interface PriceInfoProps {
  departure: Departure;
}

const availableTypos = [
  ['fourth', 'Сидячий'],
  ['third', 'Плацкарт'],
  ['second', 'Купе'],
  ['first', 'Люкс'],
];

function PriceInfo({ departure }: PriceInfoProps) {
  const { available_seats_info, price_info } = departure;
 
  return (
    <ul className="price-info">
      {availableTypos.map(type => {
        const seatsInfo = available_seats_info[type[0] as keyof typeof available_seats_info]
        const priceInfo = price_info[type[0] as keyof typeof price_info];
        if (
          seatsInfo
          && priceInfo
        ) {
          return <PriceInfoItem
            key={type[0]}
            typePlace={type[1]}
            count={seatsInfo}
            priceFrom={(priceInfo.bottom_price).toLocaleString()}
          />;
        }
      })}
    </ul>
  )
}

export default PriceInfo;

interface PriceInfoItemProps {
  typePlace: string;
  count: number;
  priceFrom: string;
}

function PriceInfoItem({ typePlace, count, priceFrom }: PriceInfoItemProps) {
  return (
    <li className='price-info__item'>
      <div className="price-info__type">{typePlace}</div>
      <div className="price-info__count">{count}</div>
      <div className="price-info__price-box">
        от <span className="price-info__price">{priceFrom}</span> <span className='price-info__currency'>₽</span>
      </div>
    </li>
  )
}
