import { Link } from 'react-router-dom';
import './ChangeSelectionButton.scss';

interface Props {
  title: string;
}

function ChangeSelectionButton({ title }: Props) {
  return (
    <span className='change-selection-button'>
      <Link to={'..'}>{title}</Link>
    </ span>
  )
}

export default ChangeSelectionButton;
