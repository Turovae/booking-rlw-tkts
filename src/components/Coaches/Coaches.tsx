import CoachSummary from '../../models/CoachSummary';
import { getNumberFromCoachName, sortCoachesByNumberCallback } from '../../utils/other';
import Coach from '../Coach/Coach';
import './Coaches.scss';

interface CoachesProps {
  coaches: CoachSummary[];
  selectedCoaches: CoachSummary[];
  onSelectCoach: (coach: CoachSummary) => void
}

function Coaches({ coaches, selectedCoaches, onSelectCoach }: CoachesProps) {
  console.log(coaches);

  const selectedIds = new Set(
    selectedCoaches.map(coach => coach.coach._id)
  );

  return (
    <div className="coaches">
      <div className="coaches__header">
        <div className="coaches__menu">
          <span className="coaches__text">Вагоны</span>
          {[...coaches]
            .sort(sortCoachesByNumberCallback)
            .map(item => {
            return (
              <span
                key={item.coach._id}
                className={
                  selectedIds.has(item.coach._id)
                  ? "coaches__select selected"
                  : "coaches__select"
                }
                onClick={() => onSelectCoach(item)}
              >{getNumberFromCoachName(item.coach.name)}</span>
            )
          })}
        </div>
        <div className="coaches__description">Нумерация вагонов начинается с головы поезда</div>
      </div>
      <div className="coaches__body">
        { selectedCoaches &&
          selectedCoaches.map(item => <Coach
            key={item.coach._id}
            data={item}
            selectedType={selectedCoaches[0].coach.class_type}
          />)
        }
      </div>
    </div>
  )
}

export default Coaches;

// function getNumberCoach(name: string): number {
//   return +name.split('-')[1];
// }

// function sortByNumberCallback( a: CoachSummary, b: CoachSummary ): number {
//   return getNumberCoach(a.coach.name) - getNumberCoach(b.coach.name);
// }
