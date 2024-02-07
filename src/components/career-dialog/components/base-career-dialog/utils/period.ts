import { Period } from "../types";

function isValidPeriod(
  startYear: number,
  startMonth: number,
  endYear: number,
  endMonth: number,
) {
  if (
    Number.isNaN(startYear) ||
    Number.isNaN(startMonth) ||
    Number.isNaN(endYear) ||
    Number.isNaN(endMonth)
  ) {
    return false;
  }

  if (startYear > endYear) {
    return false;
  }
  if (startYear === endYear && startMonth > endMonth) {
    return false;
  }
  return true;
}

export function getPeriod(
  startYear: number,
  startMonth: number,
  endYear: number,
  endMonth: number,
): Period | undefined {
  if (!isValidPeriod(startYear, startMonth, endYear, endMonth)) {
    return undefined;
  }

  return {
    startYear: startYear,
    startMonth: startMonth,
    endYear: endYear,
    endMonth: endMonth,
  };
}
