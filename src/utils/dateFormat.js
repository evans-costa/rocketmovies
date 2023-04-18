import moment from "moment-timezone";

export function setFormatedDate(noteDate) {
  const userTimeZone = moment.tz.guess();
  const dateStyle = "MM/DD/YYYY [at] h:mm A Z";

  const dateFormated = moment(noteDate).tz(userTimeZone).format(dateStyle);

  return dateFormated;
}
