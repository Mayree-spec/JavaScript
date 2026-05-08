export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

export function daysInBudget(budget, ratePerHour) {
  let daysinbudget = budget / dayRate(ratePerHour);
  return Math.floor(daysinbudget)
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let monthlyrate = dayRate(ratePerHour) * 22;
  let fullmonth = Math.floor(numDays/22);
  let remainingdays = numDays % 22;
  let monthcost = fullmonth * monthlyrate * (1 - discount);
  let remainingcost = remainingdays * dayRate(ratePerHour);
  let total = monthcost + remainingcost;
  return Math.ceil(total);
}