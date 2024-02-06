import { ReactElement, useEffect } from 'react';
import './CoachTypes.scss';
import FourthClassIcon from './CoachClassIcons/FourthClass';
import ThirdClassIcon from './CoachClassIcons/ThirdClass';
import SecondClassIcon from './CoachClassIcons/SecondClass';
import FirstClassIcon from './CoachClassIcons/FirstClass';


interface CoachTypeProps {
  type: string;
  title: string;
  createIcon: (props: { isActive: boolean }) => ReactElement;
  selected?: boolean;
}

const coachTypes: CoachTypeProps[] = [
  {
    type: 'fourth_class',
    title: 'Сидячий',
    createIcon: FourthClassIcon,
  },
  {
    type: 'third_class',
    title: 'Плацкарт',
    createIcon: ThirdClassIcon,
  },
  {
    type: 'second_class',
    title: 'Купе',
    createIcon: SecondClassIcon,
  },
  {
    type: 'first_class',
    title: 'Люкс',
    createIcon: FirstClassIcon,
  }
]

function CoachTypes() {
  const selectedType = coachTypes[1].type;
  return (
    <div className="coach-types">
      {coachTypes.map(item => <CoachType
        key={item.type}
        type={item.type}
        title={item.title}
        createIcon={item.createIcon}
        selected={item.type === selectedType}
      />)}
    </div>
  );
}

export default CoachTypes;

function CoachType({ type, title, createIcon, selected }: CoachTypeProps) {
  useEffect(() => {

  }, [selected]);
  console.log(selected);

  console.log(type);

  return (
    <div className={"coach-type" + (selected
      ? ' selected'
      : ''
    )}>
      <div className="coach-type__icon">{createIcon({ isActive: !!selected })}</div>
      <div className='coach-type__title'>{title}</div>
    </div>
  )
}
