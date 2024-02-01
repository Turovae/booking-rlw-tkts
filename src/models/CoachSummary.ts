import Coach from "./Coach";
import { Seat } from "./Seat";

export default interface CoachSummary {
  coach: Coach;
  seats: Seat[];
}
