import './ComfortIcons.scss';
import { Departure } from '../../models/Departure';

interface ComfortIconProps {
  departure: Departure;
}

function ComfortIcons({ departure }: ComfortIconProps) {
  return (
    <div className="comfort-icons">
      Comfort Icons
    </div>
 )
}

export default ComfortIcons;
