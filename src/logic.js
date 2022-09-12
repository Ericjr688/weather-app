function getTimeFromDate(currentDate){
  let time = currentDate.getHours() + ":" + currentDate.getMinutes();
  return time;
}

export { getTimeFromDate };