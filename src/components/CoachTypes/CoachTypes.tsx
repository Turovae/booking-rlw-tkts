import { ReactElement, useEffect } from 'react';
import './CoachTypes.scss';
import FourthClassIcon from './CoachClassIcons/FourthClass';
import ThirdClassIcon from './CoachClassIcons/ThirdClass';
import SecondClassIcon from './CoachClassIcons/SecondClass';
import FirstClassIcon from './CoachClassIcons/FirstClass';
import CoachSummary from '../../models/CoachSummary';


interface CoachTypeObj {
  type: string;
  title: string;
  createIcon: (props: { isActive: boolean }) => ReactElement;
}

const coachTypes: CoachTypeObj[] = [
  {
    type: 'fourth',
    title: 'Сидячий',
    createIcon: FourthClassIcon,
  },
  {
    type: 'third',
    title: 'Плацкарт',
    createIcon: ThirdClassIcon,
  },
  {
    type: 'second',
    title: 'Купе',
    createIcon: SecondClassIcon,
  },
  {
    type: 'first',
    title: 'Люкс',
    createIcon: FirstClassIcon,
  }
]

interface CoachTypesProps {
  coaches: CoachSummary[];
  selectedType: string;
  onSelectType: (type: string) => void;
}

function CoachTypes({ coaches, selectedType, onSelectType }: CoachTypesProps) {
  // const [ selectedType, setSelectedType ] = useState(coachTypes[0].type)
  // const selectedType = coachTypes[1].type;
  const availableTypes = new Set(
    coaches.map((coach) => coach.coach.class_type)
  );

  console.log(availableTypes);

  return (
    <div className="coach-types">
      {/* {coachTypes.map(
        item => {
          if (availableTypes.has(item.type)) {
            return (
              <CoachType
                key={item.type}
                type={item.type}
                title={item.title}
                createIcon={item.createIcon}
                selected={item.type === selectedType}
                onChangeSelected={() => onSelectType(item.type)}
              />
            )
          }
        }
      )} */}

      {coachTypes
        .filter(item => availableTypes.has(item.type))
        .map((item, index) => {
          let selected = false;

          if (!availableTypes.has(selectedType) && index === 0) {
            selected = true;
            onSelectType(item.type)
          }

          if (item.type === selectedType) {
            selected = true;
          }

          return (
            <CoachType
            key={item.type}
            type={item.type}
            title={item.title}
            createIcon={item.createIcon}
            selected={selected}
            onChangeSelected={() => onSelectType(item.type)}
          />
          )
        })}
    </div>
  );
}

export default CoachTypes;

interface CoachTypeProps {
  type?: string;
  title: string;
  createIcon: (props: { isActive: boolean }) => ReactElement;
  onChangeSelected: () => void;
  selected?: boolean;
}

function CoachType({ title, createIcon, selected, onChangeSelected }: CoachTypeProps) {
  useEffect(() => {

  }, [selected]);

  return (
    <div className={"coach-type" + (selected
      ? ' selected'
      : ''
    )} onClick={() => onChangeSelected()}>
      <div className="coach-type__icon">{createIcon({ isActive: !!selected })}</div>
      <div className='coach-type__title'>{title}</div>
    </div>
  )
}
