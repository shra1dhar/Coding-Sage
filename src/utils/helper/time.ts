const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours %= 12;
  hours = hours || 12;
  const formattedMins = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${formattedMins} ${ampm}`;

  return strTime;
};

const getDateTime = (date: string | Date) => {
  const formatDate = new Date(date);
  const time = formatAMPM(formatDate);
  const dateString = formatDate.toDateString();
  return [dateString, time];
};

export { getDateTime };
