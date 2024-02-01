import './SelectSeatsButton.scss';

import { Link } from 'react-router-dom';

interface SelectSeatsButtonProps {
  link: string;
  disabled?: boolean;
}

function SelectSeatsButton({ link, disabled }: SelectSeatsButtonProps) {
  const baseClass = 'select-seats-button';

  const className = disabled
    ? baseClass + ' disabled'
    : baseClass;

  return (
    <span className={className}>
      <Link to={link}>Выбрать места</Link>
    </span>
  )
}

export default SelectSeatsButton;
