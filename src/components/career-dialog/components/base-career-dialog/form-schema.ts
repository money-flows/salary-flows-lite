import { z } from "zod";

export const formSchema = z.object({
  companyName: z.string().min(1),
  startYear: z.number().int().min(1900).max(2100),
  startMonth: z.number().int().min(1).max(12),
  endYear: z.number().int().min(1900).max(2100),
  endMonth: z.number().int().min(1).max(12),
  validEndYear: z.number().int().min(1900).max(2100),
  validEndMonth: z.number().int().min(1).max(12),
  isCurrentlyEmployed: z.boolean(),
  salaries: z.array(
    z.object({
      gross: z.number().int().min(0),
      net: z.number().int().min(0),
    })
  ),
});

export type FormSchema = z.infer<typeof formSchema>;
