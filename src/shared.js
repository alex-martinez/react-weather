export function convertUnixTimestamp(timestamp) {
  const date = new Date(timestamp*1000);
  const day = date.getUTCDay();
  const dateNum = date.getUTCDate();
  const month = date.getUTCMonth();
  const daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const fullDate = `${daysList[day].substring(0,3)}, ${monthsList[month].substring(0,3)} ${dateNum}`;

  return fullDate;
}
