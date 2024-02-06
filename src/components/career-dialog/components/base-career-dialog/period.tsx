import { useCallback } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FormSchema } from "./form-schema";
import { getYearAndMonthRangeLength } from "./utils/generate-year-and-month-range";
import { getPeriod } from "./utils/period";

function YearAndMonthInput({
  yearName,
  monthName,
}: {
  yearName: "startYear" | "endYear";
  monthName: "startMonth" | "endMonth";
}) {
  const form = useFormContext<FormSchema>();
  const { fields, append } = useFieldArray({
    name: "salaries",
    control: form.control,
  });

  const updateSalaries = useCallback(() => {
    const startYear = form.getValues("startYear");
    const startMonth = form.getValues("startMonth");
    const endYear = form.getValues("endYear");
    const endMonth = form.getValues("endMonth");

    const period = getPeriod(startYear, startMonth, endYear, endMonth);

    if (period) {
      const yearAndMonthRangeLength = getYearAndMonthRangeLength(period);

      if (fields.length < yearAndMonthRangeLength) {
        for (let i = fields.length; i < yearAndMonthRangeLength; i++) {
          append({ gross: 0, net: 0 });
        }
      }
    }
  }, [form, fields, append]);

  return (
    <div className="flex items-center gap-1.5">
      <FormField
        control={form.control}
        name={yearName}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="number"
                className="w-[5.5rem] text-center"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  console.log("onChange");
                  updateSalaries();
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <span>年</span>
      <FormField
        control={form.control}
        name={monthName}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="number"
                className="w-14 text-center"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  updateSalaries();
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <span>月</span>
    </div>
  );
}

export function Period() {
  const form = useFormContext<FormSchema>();
  const isCurrentlyEmployed = form.watch("isCurrentlyEmployed");

  return (
    <div className="space-y-2">
      <Label>期間</Label>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <YearAndMonthInput yearName="startYear" monthName="startMonth" />
          <span>〜</span>

          {isCurrentlyEmployed ? (
            <span>現在</span>
          ) : (
            <YearAndMonthInput yearName="endYear" monthName="endMonth" />
          )}
        </div>
        <FormField
          control={form.control}
          name="isCurrentlyEmployed"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>現在も在籍中</FormLabel>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
