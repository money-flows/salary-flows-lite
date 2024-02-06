import { Period } from "../types";

function isValidPeriod(
  startYear: string,
  startMonth: string,
  endYear: string,
  endMonth: string,
) {
  if (
    startYear === "" ||
    startMonth === "" ||
    endYear === "" ||
    endMonth === ""
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
  startYear: string,
  startMonth: string,
  endYear: string,
  endMonth: string,
): Period | undefined {
  if (!isValidPeriod(startYear, startMonth, endYear, endMonth)) {
    return undefined;
  }
  return {
    startYear: parseInt(startYear),
    startMonth: parseInt(startMonth),
    endYear: parseInt(endYear),
    endMonth: parseInt(endMonth),
  };
}
