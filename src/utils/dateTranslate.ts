import moment from "moment";
import 'moment/dist/locale/ru';
moment.locale('ru');

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

interface HumanizeDurationObject {
  days: string | null;
  hours: string | null;
  minutes: string | null;
}

type Part = 'd' | 'h' | 'm';

function getHumanizedPart(value: number, part: Part): string {
  const str = moment.duration(value, part).humanize(false, {
    h: 24,
    m: 60,
  });
  
  if (value === 1) {
    return '1 ' + str;
  }

  return str;
}

export function durationToHumanizeObject(timestamp: number): HumanizeDurationObject {
  const durationObj = moment.duration(timestamp, 'seconds');

  const numDays = Math.floor(durationObj.asDays());
  const numHours = durationObj.hours();
  const numMinutes = durationObj.minutes();

  const days = numDays > 0
    ? getHumanizedPart(numDays, 'd')
    : null;

  const hours = numHours > 0 && numHours < 24
    ? getHumanizedPart(numHours, 'h')
    : null;

  const minutes = numMinutes > 0 && numMinutes < 60
    ? getHumanizedPart(numMinutes, 'm')
    : null;

  return {
    days,
    hours,
    minutes,
  }
}
