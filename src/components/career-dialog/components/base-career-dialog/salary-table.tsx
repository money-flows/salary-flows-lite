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
    <TableRow>
      <TableCell className="font-medium">{yearAndMonth}</TableCell>
      <TableCell>
        <FormField
          control={form.control}
          name={`salaries.${rowIndex}.gross`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="text-right" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </TableCell>
      <TableCell>
        <FormField
          control={form.control}
          name={`salaries.${rowIndex}.net`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="text-right" {...field} />
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
  const endYear = form.watch("endYear");
  const endMonth = form.watch("endMonth");
  // const isCurrentlyEmployed = form.watch("isCurrentlyEmployed");

  const [latestValidPeriod, setLatestValidPeriod] = useState<Period>();

  useEffect(() => {
    const period = getPeriod(startYear, startMonth, endYear, endMonth);

    if (period) {
      setLatestValidPeriod(period);
    }
  }, [startYear, startMonth, endYear, endMonth]);

  if (!latestValidPeriod) {
    return null;
  }

  const yearAndMonthRange = generateYearAndMonthRange(latestValidPeriod);

  return (
    <div className="space-y-2">
      <Label>給与</Label>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[8rem]">年月</TableHead>
              <TableHead>給与</TableHead>
              <TableHead>手取り</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
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
