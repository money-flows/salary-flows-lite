import { z } from "zod";

export const formSchema = z.object({
  companyName: z.string(),
  startYear: z.string().transform((value) => parseInt(value)),
  startMonth: z.string().transform((value) => parseInt(value)),
  endYear: z.string().transform((value) => parseInt(value)),
  endMonth: z.string().transform((value) => parseInt(value)),
  salaries: z.array(
    z.object({
      gross: z.number().int().min(0),
      net: z.number().int().min(0),
    }),
  ),
  isCurrentlyEmployed: z.boolean().optional(),
});

export type FormSchema = z.input<typeof formSchema>;
export type TransformedFormSchema = z.output<typeof formSchema>;
