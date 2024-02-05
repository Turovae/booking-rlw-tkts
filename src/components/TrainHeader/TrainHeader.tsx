import { Departure } from '../../models/Departure';
import './TrainHeader.scss';

interface TrainHeaderProps {
  data: Departure;
  isColumn?: boolean;
}

function TrainHeader({ data, isColumn }: TrainHeaderProps) {
  const getClassName = () => {
    const baseClassName = 'train-header'

    return isColumn
      ? baseClassName + ' column'
      : baseClassName;
  }

  return (
    <div className={getClassName()}>
      <div className="train-header__header" >
        <div className="train-header__logo" />
      </div>
      <div className="train-header__body">
        <div className="train-header__title">
          {data.train.name}
        </div>
        <div className="train-header__endpoints">
          <span>{data.from.city.name}</span> →<br />
          <span>{data.to.city.name}</span>
        </div>
      </div>
    </div>
  );
}

export default TrainHeader;
