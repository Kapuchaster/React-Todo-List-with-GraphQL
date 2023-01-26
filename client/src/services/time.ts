/** Takes timestamp and formates it to the hh:mm:ss format */
const getMessageFormatTime = (timestamp: string) => {
  const date = new Date(Number(timestamp));
  const hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();

  if (minutes < "10") minutes = "0" + minutes;
  if (seconds < "10") seconds = "0" + seconds;

  return `${hours}:${minutes}:${seconds}`;
};

export default getMessageFormatTime;
