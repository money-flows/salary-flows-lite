import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Schema } from "./schema";

function YearAndMonthInput({
  yearName,
  monthName,
}: {
  yearName: "startYear" | "endYear";
  monthName: "startMonth" | "endMonth";
}) {
  const form = useFormContext<Schema>();

  return (
    <div className="flex items-center gap-1.5">
      <FormField
        control={form.control}
        name={yearName}
        render={({ field }) => (
          <FormItem className="w-16 text-center">
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <span>年</span>
      <FormField
        control={form.control}
        name={monthName}
        render={({ field }) => (
          <FormItem className="w-10 text-center">
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <span>月</span>
    </div>
  );
}

export function Period() {
  const form = useFormContext<Schema>();
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
