import CoachSummary from "../../../models/CoachSummary";
import './SeatsPriceTables.scss';

interface PriceTableProps {
  data: CoachSummary;
}

export function FourthPriceTable({ data }: PriceTableProps) {
  const { coach } = data;

  return (
    <div className="coach-price-table">
      <div className="coach-price-table__row">
        <div className="coach-price-table__head">
          Места: <span className="coach-price-table__variable">
            {coach.available_seats}
          </span>
        </div>
        <div className="coach-price-table__head">Стоимость</div>
      </div>
      <div className="coach-price-table__row">
        <div className="coach-price-table__ceil"></div>
        <div className="coach-price-table__ceil"><span className="coach-price-table__variable">{(coach.bottom_price).toLocaleString()}</span> <span className="coach-price-table__currency">₽</span></div>
      </div>
    </div>
  );
}

export function ThirdPriceTable({ data }: PriceTableProps) {
  const { coach } = data;

  return (
    <div className="coach-price-table">
      <div className="coach-price-table__row">
        <div className="coach-price-table__head">
          Места: <span className="coach-price-table__variable">
            {coach.available_seats}
          </span>
        </div>
        <div className="coach-price-table__head">Стоимость</div>
      </div>
      <div className="coach-price-table__row">
        <div className="coach-price-table__ceil">Нижние</div>
        <div className="coach-price-table__ceil">
          <span className="coach-price-table__variable">{(coach.bottom_price).toLocaleString()}</span> <span className="coach-price-table__currency">₽</span>
        </div>
      </div>
      <div className="coach-price-table__row">
        <div className="coach-price-table__ceil">Верхние</div>
        <div className="coach-price-table__ceil">
          <span className="coach-price-table__variable">{(coach.top_price).toLocaleString()}</span> <span className="coach-price-table__currency">₽</span>
        </div>
      </div>
      
      <div className="coach-price-table__row">
        <div className="coach-price-table__ceil">Боковые</div>
        <div className="coach-price-table__ceil">
          <span className="coach-price-table__variable">{(coach.side_price).toLocaleString()}</span> <span className="coach-price-table__currency">₽</span>
        </div>
      </div>
    </div>
  );
}


export function SecondPriceTable({ data }: PriceTableProps) {
  const { coach } = data;

  return (
    <div className="coach-price-table">
      <div className="coach-price-table__row">
        <div className="coach-price-table__head">
          Места: <span className="coach-price-table__variable">
            {coach.available_seats}
          </span>
        </div>
        <div className="coach-price-table__head">Стоимость</div>
      </div>
      <div className="coach-price-table__row">
        <div className="coach-price-table__ceil">Нижние</div>
        <div className="coach-price-table__ceil">
          <span className="coach-price-table__variable">{(coach.bottom_price).toLocaleString()}</span> <span className="coach-price-table__currency">₽</span>
        </div>
      </div>
      <div className="coach-price-table__row">
        <div className="coach-price-table__ceil">Верхние</div>
        <div className="coach-price-table__ceil">
          <span className="coach-price-table__variable">{(coach.top_price).toLocaleString()}</span> <span className="coach-price-table__currency">₽</span>
        </div>
      </div>
    </div>
  );
}


export function FirstPriceTable({ data }: PriceTableProps) {
  const { coach } = data;

  return (
    <div className="coach-price-table">
      <div className="coach-price-table__row">
        <div className="coach-price-table__head">
          Места: <span className="coach-price-table__variable">
            {coach.available_seats}
          </span>
        </div>
        <div className="coach-price-table__head">Стоимость</div>
      </div>
      <div className="coach-price-table__row">
        <div className="coach-price-table__ceil"></div>
        <div className="coach-price-table__ceil"><span className="coach-price-table__variable">{(coach.price).toLocaleString()}</span> <span className="coach-price-table__currency">₽</span></div>
      </div>
    </div>
  );
}
