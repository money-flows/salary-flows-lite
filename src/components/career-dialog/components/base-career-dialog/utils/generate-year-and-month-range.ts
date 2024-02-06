import { Period } from "../types";

export function generateYearAndMonthRange({
  startYear,
  startMonth,
  endYear,
  endMonth,
}: Period) {
  let currentYear = startYear;
  let currentMonth = startMonth;
  const result = [];

  while (
    currentYear < endYear ||
    (currentYear === endYear && currentMonth <= endMonth)
  ) {
    result.push(`${currentYear}年${currentMonth}月`);

    if (currentMonth === 12) {
      currentYear += 1;
      currentMonth = 1;
    } else {
      currentMonth += 1;
    }
  }

  return result;
}

export function getYearAndMonthRangeLength({
  startYear,
  startMonth,
  endYear,
  endMonth,
}: Period) {
  const start = startYear * 12 + startMonth;
  const end = endYear * 12 + endMonth;
  return end - start + 1;
}
