import moment from "moment";
const requestFormat = 'YYYY-MM-DD';

export function timestampToRequestDate(timestamp: number): string | null {
  return timestamp ? moment(timestamp).format(requestFormat) : null;
}

export function unixTimestampToTime(timestamp: number): string {
  return moment.unix(timestamp).format('DD.MM HH:mm');
}

export function durationToHumanFormat(timestamp: number): string {
  const duration = moment.duration(timestamp, 'seconds');

  const days = Math.floor(duration.asDays());
  let hours: string | number = duration.hours();
  let minutes: string | number = duration.minutes();

  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return (days > 0 ? `${days} д. ` : '') + `${hours}:${minutes}`;
}