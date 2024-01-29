import moment from "moment";
const requestFormat = 'YYYY-MM-DD';

export function timestampToRequestDate(timestamp: number): string | null {
  return timestamp ? moment(timestamp).format(requestFormat) : null;
}