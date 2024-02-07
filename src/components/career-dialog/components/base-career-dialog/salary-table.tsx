import { useFormContext } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormSchema } from "./form-schema";
import { generateYearAndMonthRange } from "./utils/generate-year-and-month-range";
import { useEffect, useState } from "react";
import { Period } from "./types";
import { getPeriod } from "./utils/period";

interface SalaryTableRowProps {
  yearAndMonth: string;
  rowIndex: number;
}

function SalaryTableRow({ yearAndMonth, rowIndex }: SalaryTableRowProps) {
  const form = useFormContext<FormSchema>();

  return (
    <TableRow
      style={{ transform: `translateY(${60 * rowIndex}px)` }}
      className="absolute flex h-[60px] w-full"
    >
      <TableCell className="flex w-1/3 items-center font-medium">
        {yearAndMonth}
      </TableCell>
      <TableCell className="flex w-1/3 items-center">
        <FormField
          control={form.control}
          name={`salaries.${rowIndex}.gross`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number" className="text-right" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </TableCell>
      <TableCell className="flex w-1/3 items-center">
        <FormField
          control={form.control}
          name={`salaries.${rowIndex}.net`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number" className="text-right" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </TableCell>
    </TableRow>
  );
}

export function SalaryTable() {
  const form = useFormContext<FormSchema>();

  const startYear = form.watch("startYear");
  const startMonth = form.watch("startMonth");
  const validEndYear = form.watch("validEndYear");
  const validEndMonth = form.watch("validEndMonth");

  const [latestValidPeriod, setLatestValidPeriod] = useState<Period>();

  useEffect(() => {
    const period = getPeriod(
      parseInt(startYear),
      parseInt(startMonth),
      validEndYear,
      validEndMonth,
    );

    if (period) {
      setLatestValidPeriod(period);
    }
  }, [startYear, startMonth, validEndYear, validEndMonth]);

  if (!latestValidPeriod) {
    return null;
  }

  const yearAndMonthRange = generateYearAndMonthRange(latestValidPeriod);

  return (
    <div className="space-y-2">
      <Label>給与</Label>
      <Card>
        <Table
          className="grid"
          containerClassName="overflow-auto relative h-96"
        >
          <TableHeader className="sticky top-0 z-10 grid rounded-lg bg-white">
            <TableRow className="flex w-full">
              <TableHead className="flex w-1/3 items-center">年月</TableHead>
              <TableHead className="flex w-1/3 items-center">給与</TableHead>
              <TableHead className="flex w-1/3 items-center">手取り</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody
            style={{ height: `${yearAndMonthRange.length * 60}px` }}
            className="relative grid"
          >
            {yearAndMonthRange.map((_, index) => (
              <SalaryTableRow
                key={index}
                yearAndMonth={yearAndMonthRange[index]}
                rowIndex={index}
              />
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
