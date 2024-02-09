import CoachSummary from '../../models/CoachSummary';
import { getNumberFromCoachName } from '../../utils/other';
import './Coach.scss';
import ComfortServices from './ComfortServices/ComfortServices';
import { FirstPriceTable, FourthPriceTable, SecondPriceTable, ThirdPriceTable } from './SeatsPriceTables/SeatsPriceTables';

interface CoachProps {
  selectedType: string;
  data: CoachSummary;
}

function Coach({ data, selectedType }: CoachProps) {
  const { coach } = data;

  return (
    <div className="coach">
      <div className="coach__details">
        <div className="coach__index">
          <div className="coach__number">{getNumberFromCoachName(coach.name)}</div>
          <div className="coach__hint">вагон</div>
        </div>
        <div className="coach__seats">
          { selectedType === 'fourth' && <FourthPriceTable data={data} /> }
          { selectedType === 'third' && <ThirdPriceTable data={data} /> }
          { selectedType === 'second' && <SecondPriceTable data={data} /> }
          { selectedType === 'first' && <FirstPriceTable data={data} /> }
        </div>
        <div className="coach__comfort">
          <ComfortServices />
        </div>
      </div>
      <div className="coach__map"></div>
    </div>
  )
}

export default Coach;
