interface Salary {
  gross: number;
  net: number;
}

export interface Career {
  companyName: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  salaries: Salary[];
}
