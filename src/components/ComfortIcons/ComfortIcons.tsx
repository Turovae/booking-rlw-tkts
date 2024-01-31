import './ComfortIcons.scss';
import { Departure } from '../../models/Departure';

import wifiIcon from './icons/wifi.svg';
import airConditioningIcon from './icons/air_conditioning.svg';
import expressIcon from './icons/express.svg';

const possibleIcons = [
  ['have_wifi', wifiIcon],
  ['have_air_conditioning', airConditioningIcon],
  ['is_express', expressIcon],
]

interface ComfortIconProps {
  departure: Departure;
}


function ComfortIcons({ departure }: ComfortIconProps) {
  return (
    <div className="comfort-icons">
      {possibleIcons.map(icon => {
        if (departure[icon[0] as keyof typeof departure]) {
          return <img
            className='comfort-icons__icon'
            key={icon[0]}
            src={icon[1]}
            alt=''
          />
        }
      })}
    </div>
 )
}

export default ComfortIcons;
