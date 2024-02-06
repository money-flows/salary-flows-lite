import { z } from "zod";

export const formSchema = z.object({
  companyName: z.string().min(1),
  startYear: z
    .string()
    .min(1)
    .transform((value) => parseInt(value)),
  startMonth: z
    .string()
    .min(1)
    .transform((value) => parseInt(value)),
  endYear: z
    .string()
    .min(1)
    .transform((value) => parseInt(value)),
  endMonth: z
    .string()
    .min(1)
    .transform((value) => parseInt(value)),
  salaries: z.array(
    z.object({
      gross: z
        .string()
        .min(1)
        .transform((value) => parseInt(value)),
      net: z
        .string()
        .min(1)
        .transform((value) => parseInt(value)),
    }),
  ),
  isCurrentlyEmployed: z.boolean().optional(),
});

export type FormSchema = z.input<typeof formSchema>;
export type TransformedFormSchema = z.output<typeof formSchema>;
