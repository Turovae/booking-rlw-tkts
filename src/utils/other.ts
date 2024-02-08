import CoachSummary from "../models/CoachSummary";

export function getNumberFromCoachName(name: string): number {
  return +name.split('-')[1];
}

export function sortCoachesByNumberCallback( a: CoachSummary, b: CoachSummary ): number {
  return getNumberFromCoachName(a.coach.name) - getNumberFromCoachName(b.coach.name);
}
