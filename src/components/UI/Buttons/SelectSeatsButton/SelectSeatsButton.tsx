import { Departure } from '../../../../models/Departure';
import './SelectSeatsButton.scss';

import { Link } from 'react-router-dom';

interface SelectSeatsButtonProps {
  data: Departure;
  disabled?: boolean;
}

function SelectSeatsButton({ data, disabled }: SelectSeatsButtonProps) {
  const baseClass = 'select-seats-button';

  const className = disabled
    ? baseClass + ' disabled'
    : baseClass;

  return (
    <span className={className}>
      <Link to={data._id} state={data}>Выбрать места</Link>
    </span>
  )
}

export default SelectSeatsButton;
