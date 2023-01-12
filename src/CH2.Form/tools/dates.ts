export function dateToString(date: Date | undefined) {
  if (!date) return;
  let sDate = date.toISOString();
  sDate = sDate?.split('T')[0];
  return sDate;
}
