import moment from 'moment';

export function formatAgo(date) {
  return moment(date).fromNow();
}

export const getMinutesRead = numWords =>
  numWords ? `${Math.round(numWords / 200)} min read` : '';
